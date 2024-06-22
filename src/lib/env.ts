import Stripe from "stripe";
import { Resend } from 'resend';


export const resend = new Resend(process.env.RESEND_KEY! as string);
export const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET! as string;
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY! as string, {
    apiVersion: "2024-04-10",
    typescript: true,
});
