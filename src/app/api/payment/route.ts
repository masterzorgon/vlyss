import { NextRequest, NextResponse } from "next/server";
import { headers } from 'next/headers';
import Stripe from "stripe";

import { stripe, resend, webhookSecret } from '@/lib/constants';
import { SubscriptionConfirmation, SubscriptionNotification } from "@/emails/Subscription";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.text(); // get body in string format
    const signature = headers().get("stripe-signature") as string; // authenticates req as from stripe

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            webhookSecret
        );
        console.log("Event", event);
    } catch (error) {
        return new NextResponse("Invalid signautre", { status: 400 });
    }

    const session = event.data.object as Stripe.Checkout.Session;

    let resendData;
    if (event.type === "checkout.session.completed") {

        const subscription = await stripe.subscriptions.retrieve(session.subscription as string);

        const customerEmail = (session as any).customer_details.email as string;
        const customerName = (session as any).customer_details.name as string;
        const customerID = (session as any).customer as string;
        const subscriptionPlan = ((subscription as any).plan.amount.toString() === "79900" ? "Pro Subscription" : "Standard Subscription");

        // notify vlyss of subscription
        await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: "hello@vlyss.com",
            cc: [
                "nathan@vlyss.com",
                "cade@vlyss.com"
            ],
            subject: "New Vlyss Subscriber 🎉",
            react: SubscriptionNotification({
                customerEmail,
                customerName,
                customerID,
                subscriptionPlan
            })
        });

        const confirmData = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            // to: customerEmail,
            to: "nathan.zebedee@gmail.com",
            subject: "Vlyss Subscription Confirmation",
            react: SubscriptionConfirmation({
                subscriptionPlan
            })
        })
    }

    return NextResponse.json({ resendData }, { status: 200 });
};