import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>来自个人网站的新消息</Preview>
      <Tailwind>
        <Body className="bg-gray-200 text-black">
          <Container>
            <Section className="bg-white shadow shadow-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                来自个人网站的消息：
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>发件人的电子邮件是: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
