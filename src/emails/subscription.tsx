import { Link } from "@react-email/components";
import * as React from "react";

import { EmailTemplate } from "./components/EmailTemplate";

interface SubscriptionNotification {
    customerEmail: string;
    customerName: string;
    customerID: string;
    subscriptionPlan: string;
}

// email that notifies vlyss
export const SubscriptionNotification = ({
    customerEmail,
    customerName,
    customerID,
    subscriptionPlan,
}: SubscriptionNotification) => {
    const previewText = subscriptionPlan;
    const heading = "Vlyss has a new subscriber!";
    const body = [
        { label: "Customer Name", value: customerName },
        { label: "Customer Email", value: customerEmail },
        { label: "Customer ID", value: customerID },
        { label: "Subscription Plan", value: subscriptionPlan },
    ];

    return (
        <EmailTemplate
            previewText={previewText}
            heading={heading}
            body={body}
        />
    );
};

interface SubscriptionConfirmation {
    subscriptionPlan: string;
}

// confirmation email sent to customer
export const SubscriptionConfirmation = ({
    subscriptionPlan,
}: SubscriptionConfirmation) => {
    const previewText = subscriptionPlan;
    const heading = `You are now a Vlyss customer on the ${subscriptionPlan}`;
    const body = [
        {
            value: "Please reply to this email with any questions or tasks!"
        },
        {
            value: (
                <>
                    Book a meeting with the vlyss team using{" "}
                    <Link href="https://cal.com/hello-vlyss/15min">this link</Link>.
                </>
            )
        },
    ];

    return (
        <EmailTemplate
            previewText={previewText}
            heading={heading}
            body={body}
        />
    );
};