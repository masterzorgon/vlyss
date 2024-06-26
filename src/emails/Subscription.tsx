import * as React from "react";

import { EmailTemplate } from "./components/EmailTemplate";

interface SubscriptionConfirmatioInterface {
    subscriptionPlan: string;
}

export const SubscriptionConfirmation = ({
    subscriptionPlan,
}: SubscriptionConfirmatioInterface) => {
    const previewText = subscriptionPlan;
    const heading = `You are now a Vlyss customer on the ${subscriptionPlan}`;
    const body = [
        {
            value: "Please reply to this email with any questions or tasks!"
        },
    ];
    const cta = {
        message: "Book a meeting with the vlyss team using the link below!",
        href: "https://cal.com/hello-vlyss/15min",
        buttonText: "Book a Meeting"
    };

    return (
        <EmailTemplate
            previewText={previewText}
            heading={heading}
            body={body}
            cta={cta}
        />
    );
};

interface SubscriptionNotificationInterface {
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
}: SubscriptionNotificationInterface) => {
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
