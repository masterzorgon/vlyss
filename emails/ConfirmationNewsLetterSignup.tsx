import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

const ConfirmationNewsLetterSignup = () => {
  const previewText = "Welcome to the La Playa Mexican Cafe Newsletter";

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px] w-full flex justify-center items-center mx-auto">
              <img
                src="https://drive.google.com/thumbnail?id=1AOf9PIM9-zdnPwWCfg_pGedJF2gz581V"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[10px] mx-0">
              Welcome to the La Playa Mexican Cafe Newsletter!
            </Heading>
            <Text className="text-black text-[14px] leading-[24px] text-center">
              We thank you for choosing to signup for our newsletter and stay up to date with our latest offerings and promotions. Feel free to preview our menu by clicking the button below!
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href="https://order.toasttab.com/online/la-playa-mexican-cafe-502-s-77-sunshine-strip"
              >
                Order Now
              </Button>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              If you were not expecting this invitation, you can ignore this email. If
              you are concerned about your account's safety, please reply to
              this email to get in touch with us at Laplayamain@gmail.com. 
              If you would like to unsubscribe from our email list, please do so on our website: https://www.laplayamexicancafe.com/unsubscribe
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ConfirmationNewsLetterSignup;
