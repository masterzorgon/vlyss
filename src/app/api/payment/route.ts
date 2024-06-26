import { NextRequest, NextResponse } from "next/server";
import { headers } from 'next/headers';
import Stripe from "stripe";

import { stripe, resend, STRIPE_WEBHOOK_SECRET, VLYSS_EMAIL, CC_CONTACTS } from '@/lib/constants';
import { SubscriptionConfirmation, SubscriptionNotification } from "@/emails/Subscription";

export async function POST(req: NextRequest, res: NextResponse) {
    console.log("ENDPOINT HIT");

    const body = await req.text(); // get body in string format
    const signature = headers().get("stripe-signature") as string; // authenticates req as from stripe

    console.log("SIG VALIDATED");

    try {
        const event: Stripe.Event = stripe.webhooks.constructEvent(
            req.json.toString(),
            signature,
            STRIPE_WEBHOOK_SECRET
        );

        console.log("EVENT CREATED");

        if (event.type === "checkout.session.completed") {
            console.log("EVENT IS CHECKOUT SESSION COMPLETED");

            const session = event.data.object as Stripe.Checkout.Session;
            const customerEmail = (session as any).customer_details.email as string;
            const customerName = (session as any).customer_details.name as string;
            const customerID = (session as any).customer as string;
            console.log("SESSION FOUND");

            const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
            const subscriptionPlan = ((subscription as any).plan.amount.toString() === "79900" ? "Premium Subscription" : "Standard Subscription");
            console.log("SUBSCRIPTION FOUND");

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

            console.log("NOTIF SENT");

            // send confirmation to customer
            await resend.emails.send({
                from: VLYSS_EMAIL,
                to: customerEmail,
                subject: "Vlyss Subscription Confirmation",
                react: SubscriptionConfirmation({ subscriptionPlan })
            });

            console.log("CONFIRM CREATED");
        }

        console.log("SUCCESS");
        return NextResponse.json({ event }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 400 });
    }
};
