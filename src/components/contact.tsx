"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("联系我");


  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      ref={ref}
      id="contact"
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
    >
      <SectionHeading>联系我</SectionHeading>
      <p className="-mt-6 text-gray-700 dark:text-white/80">
        请直接联系我{" "}
        <a className="underline" href="mailto:qingyuano@foxmail.com">
          qingyuano@foxmail.com
        </a>{" "}
        或者填写下方表单
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          //ts-ignore
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          
          toast.success("邮件发送成功!");
        }}
      >
        <input
          className="borderBlack h-14 rounded-lg px-4 outline-black transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="你的邮箱"
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4 outline-black transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="message"
          placeholder="你的信息"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
