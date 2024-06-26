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
} from "@react-email/components";
import * as React from "react";

interface TextItem {
    label?: string;
    value: React.ReactNode;
}

interface EmailTemplateInterface {
    previewText: string;
    heading: string;
    body: TextItem[];
}

export const EmailTemplate = ({
    previewText,
    heading,
    body,
}: EmailTemplateInterface) => {
    const previewTextMsg = previewText;

    return (
        <Html>
            <Head />
            <Preview>{previewTextMsg}</Preview>
            <Tailwind>
                <Body className="bg-white font-sans px-2">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[480px]">
                        <Section className="mt-[32px] w-full flex justify-center items-center mx-auto">
                            <Img
                                width="475"
                                height="300"
                                src="https://www.vlyss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvlyss-pod.1cff21cc.png&w=3840&q=75"
                                alt="Vlyss Logo"
                            />
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[10px] mx-0">
                            {heading}
                        </Heading>
                        <Section className="mt-[20px] text-black text-[14px] leading-[24px]">
                            {body.map((textItem, index) => (
                                <Text key={index} className="text-center">
                                    {textItem.label && <strong>{textItem.label}</strong>}
                                    {textItem.label ? ": " : ""}
                                    {textItem.value}
                                </Text>
                            ))}
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};