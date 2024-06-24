import { Link } from "@react-email/components";
import * as React from "react";

import { EmailTemplate } from "./components/EmailTemplate";

interface NewsletterNotification {
    email: string;
    newsletterCount: string
}

export const NewsLetterNotification = ({
    email,
    newsletterCount
}: NewsletterNotification) => {
    const previewText = email;
    const heading = "New Newsletter Signup!";
    const body = [
        { label: "New signup", value: email },
        { label: "Newsletter count", value: `${newsletterCount} subscribers` },
    ];

    return (
        <EmailTemplate
            previewText={previewText}
            heading={heading}
            body={body}
        />
    );
};

interface NewsletterConfirmation {
    email: string;
}

// email sent to newsletter sign up
export const NewsletterConfirmation = ({ email }: NewsletterConfirmation) => {
    const previewText = "You've joined the Vlyss Newsletter!";
    const heading = "Welcome onboard to the Vlyss Newsletter!";
    const body = [
        {
            value: (
                <>
                    We're so happy you decided to join the conversation on all things Vlyss!
                    Don't worry, we don't plan on spamming you. This newsletter is simply an
                    avenue through which we publicize announcements and, occasionally, our
                    thoughts on the state of technology, design, and culture.
                </>
            ),
        },
        {
            value: (
                <>
                    Want to become a Vlyss customer? Book a meeting with the Vlyss team
                    using <Link href="https://cal.com/hello-vlyss/15min">this link</Link>.
                </>
            ),
        },
        {
            value: (
                <>
                    If you ever want to unsubscribe from the Vlyss Newsletter, simply click{" "}
                    <Link href={`https://vlyss.com/api/newsletter?=${email}`}>this link</Link>.
                </>
            ),
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

export const NewsletterUnsubscribe = () => {
    const previewText = "You're unsubscribed";
    const heading = "We're sorry to see you go!"
    const body = [
        { value: "We thank you for being a part of the Vlyss Newsletter, and we're sorry to see you go" },
        { value: <>Please feel free to rejoin at any time on <Link href="https://vlyss.com#newsletter">our website</Link>.</> }
    ];

    return (
        <EmailTemplate 
            previewText={previewText}
            heading={heading}
            body={body}
        />
    );
};