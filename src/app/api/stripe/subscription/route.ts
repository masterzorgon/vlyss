import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY as string);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2024-04-10"
});

// Stripe requires the raw body to construct the event.
export const config = {
    api: {
      bodyParser: false,
    },
  };

export async function POST(req: NextRequest, res: NextResponse) {
    let event;

    console.log("req.headers", req.headers);
    if (req.method !== "POST")
        return NextResponse.json({ error: "Only POST requests allowed" }, { status: 500 });

    try {
        const sig = (req.headers as any)['stripe-signature'];
        const payload = req.arrayBuffer().toString()
        event = stripe.webhooks.constructEvent(payload, sig, webhookSecret);
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
    }

    // Handle the event
    switch (event.type) {
        case 'subscription_schedule.created':
            const subscriptionIntent = event.data.object;
            console.log(`PaymentIntent for ${subscriptionIntent.created} was successful!`);

            // send confirmation email to signee
            const { data } = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: "nathan@vlyss.com",
                subject: "New Subscriber to Vlyss",
                text: "<h1>NEW SUBSCRIBER!</h1>",
            });

            return NextResponse.json({ data });
        default:
            console.log(`Unhandled event type ${event.type}.`);
    }
}