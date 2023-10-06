'use client'
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

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
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>联系我</SectionHeading>
      <p className="-mt-6 text-gray-700 dark:text-white/80">
        请直接联系我{" "}
        <a className="underline" href="mailto:qingyuano@foxmail.com">
          qingyuano@foxmail.com
        </a>{" "}
        或者填写下方表单
      </p>

      <form className="mt-10 flex flex-col dark:text-black">
        <input
          className="borderBlack outline-black h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="你的邮箱"
        />
        <textarea
          className="borderBlack outline-black my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="message"
          placeholder="你的信息"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="disabled:bg-opacity-65 group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 dark:bg-white dark:bg-opacity-10"
        >
          提交{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />{" "}
        </button>
      </form>
    </motion.section>
  );
}
