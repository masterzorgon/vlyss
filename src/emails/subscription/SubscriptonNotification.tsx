import * as React from "react";

import { EmailTemplate } from "../components/EmailTemplate";

interface SubscriptionNotificationInterface {
    customerEmail: string;
    customerName: string;
    customerID: string;
    subscriptionPlan: string;
}

// email that notifies vlyss
const SubscriptionNotification = ({
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

export default SubscriptionNotification;