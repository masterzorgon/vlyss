import { Link } from "@react-email/components";
import * as React from "react";

import { EmailTemplate } from "../components/EmailTemplate";

interface SubscriptionConfirmatioInterface {
    subscriptionPlan: string;
}


const SubscriptionConfirmation = ({
    subscriptionPlan,
}: SubscriptionConfirmatioInterface) => {
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

export default SubscriptionConfirmation;