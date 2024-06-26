import { NextRequest, NextResponse } from "next/server";
import { headers } from 'next/headers';
import Stripe from "stripe";

import { stripe, resend, webhookSecret, VLYSS_EMAIL, CC_CONTACTS } from '@/lib/constants';
import { SubscriptionConfirmation, SubscriptionNotification } from "@/emails/Subscription";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.text(); // get body in string format
    const signature = headers().get("Stripe-Signature") as string; // authenticates req as from stripe

    try {
        const event: Stripe.Event = stripe.webhooks.constructEvent(
            body,
            signature,
            webhookSecret
        );

        if (event.type === "checkout.session.completed") {
            const session = event.data.object as Stripe.Checkout.Session;
            const customerEmail = (session as any).customer_details.email as string;
            const customerName = (session as any).customer_details.name as string;
            const customerID = (session as any).customer as string;

            const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
            const subscriptionPlan = ((subscription as any).plan.amount.toString() === "79900" ? "Premium Subscription" : "Standard Subscription");

            // notify vlyss of subscription
            await resend.emails.send({
                from: VLYSS_EMAIL,
                to: VLYSS_EMAIL,
                cc: CC_CONTACTS,
                subject: "New Vlyss Subscriber 🎉",
                react: SubscriptionNotification({
                    customerEmail,
                    customerName,
                    customerID,
                    subscriptionPlan
                })
            });

            // send confirmation to customer
            await resend.emails.send({
                from: VLYSS_EMAIL,
                to: customerEmail,
                subject: "Vlyss Subscription Confirmation",
                react: SubscriptionConfirmation({ subscriptionPlan })
            });
        }

        return NextResponse.json({ event }, { status: 200 });
    } catch (error) {
        return new NextResponse("Invalid signautre", { status: 400 });
    }
};