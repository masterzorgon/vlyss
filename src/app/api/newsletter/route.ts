import { NextRequest, NextResponse } from "next/server";

import { resend, audienceId, VLYSS_EMAIL, CC_CONTACTS } from '@/lib/constants';

import { NewsLetterNotification, NewsletterConfirmation, NewsletterUnsubscribe } from "@/emails/Newsletter";

// endpoint to sign up for the vlyss newsletter
export async function POST(req: NextRequest, res: NextResponse) {
    const { email } = await req.json();

    try {
        // add email to resend audience
        await resend.contacts.create({
            email,
            unsubscribed: false,
            audienceId,
        });

        // send confirmation email to signee
        const { data: confirmationEmailReceipt } = await resend.emails.send({
            from: VLYSS_EMAIL,
            to: email,
            subject: "Welcome to the Vlyss Newsletter!",
            react: NewsletterConfirmation({ email }),
            headers: {
                'List-Unsubscribe': `<https://www.vlyss.com/api/newsletter?email=${email}>`
            },
        })

        // notify vlyss of news letter signup
        const { data: newsletterList } = await resend.contacts.list({ audienceId });
        const newsletterCount = newsletterList!.data.length.toString();
        const { data: notificationEmailReceipt } = await resend.emails.send({
            from: VLYSS_EMAIL,
            to: VLYSS_EMAIL,
            cc: CC_CONTACTS,
            subject: "New Newsletter Signup!",
            react: NewsLetterNotification({ email, newsletterCount })
        });

        const data = {
            notifcationEmail: notificationEmailReceipt,
            confirmationEmail: confirmationEmailReceipt
        };
        return NextResponse.json({ data }, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ err: err }, { status: 500 });
    }
}

// endpoint to unsubscribe from the vlyss news letter
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    if (!email) {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    try {
        // remove contact from resend audience
        const { data } = await resend.contacts.remove({
            email: email,
            audienceId
        });

        // Optionally, you can send a confirmation email for unsubscribing
        await resend.emails.send({
            from: VLYSS_EMAIL,
            to: email,
            subject: "You've been unsubscribed from the Vlyss Newsletter",
            react: NewsletterUnsubscribe()
        });

        return NextResponse.json({ data }, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'An error occurred while unsubscribing' }, { status: 500 });
    }
}