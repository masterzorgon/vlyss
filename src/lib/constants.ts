import Stripe from "stripe";
import { Resend } from 'resend';

export const CC_CONTACTS = [
    "nathan@vlyss.com",
    "cade@vlyss.com",
    "luke@vlyss.com"
];
export const VLYSS_EMAIL = "hello@vlyss.com";
export const resend = new Resend(process.env.RESEND_KEY! as string);
export const audienceId = process.env.RESEND_AUDIENCE_ID! as string;
export const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET! as string;
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY! as string, {
    apiVersion: "2023-08-16",
    typescript: true,
});
