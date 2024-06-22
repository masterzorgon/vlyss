import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Tailwind,
    Img,
    Link
} from "@react-email/components";
import * as React from "react";

interface SubscriptionNotificationInterface {
    customerEmail: string;
    customerName: string;
    customerID: string;
    subscriptionPlan: string;
}

interface SubscriptionConfirmationInterface {
    subscriptionPlan: string;
}

export const SubscriptionNotification = ({
    customerEmail,
    customerName,
    customerID,
    subscriptionPlan,
}: SubscriptionNotificationInterface) => {
    const previewText = subscriptionPlan;
    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white font-sans px-2">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Section className="mt-[32px] w-full flex justify-center items-center mx-auto">
                            <Img
                                width="460"
                                height="300"
                                src="https://www.vlyss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvlyss-pod.1cff21cc.png&w=3840&q=75"
                                alt="Vlyss Logo"
                            />
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[10px] mx-0">
                            Vlyss has a new subscriber!
                        </Heading>
                        <Section className="mt-[20px] text-black text-[14px] leading-[24px]">
                            <Text className="text-center">
                                <strong>Customer Name:</strong> {customerName}
                            </Text>
                            <Text className="text-center">
                                <strong>Customer Email:</strong> {customerEmail}
                            </Text>
                            <Text className="text-center">
                                <strong>Customer ID:</strong> {customerID}
                            </Text>
                            <Text className="text-center">
                                <strong>Subscription Plan:</strong> {subscriptionPlan}
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export const SubscriptionConfirmation = ({
    subscriptionPlan,
}: SubscriptionConfirmationInterface) => {
    const previewText = subscriptionPlan;
    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white font-sans px-2">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Section className="mt-[32px] w-full flex justify-center items-center mx-auto">
                            <Img
                                width="460"
                                height="300"
                                src="https://www.vlyss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvlyss-pod.1cff21cc.png&w=3840&q=75"
                                alt="Vlyss Logo"
                            />
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[10px] mx-0">
                            You are now a Vlyss customer on the {subscriptionPlan}
                        </Heading>
                        <Section className="mt-[20px] text-black text-[14px] leading-[24px]">
                            <Text className="text-center">
                                Please reply to this email with any questions or tasks!
                            </Text>
                            <Text className="text-center">
                                Book a meeting with the vlyss team using <Link href="https://cal.com/hello-vlyss/15min">this link</Link>. 
                                Talk to you soon!
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};
