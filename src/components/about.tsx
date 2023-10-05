"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("关于", 1);
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>关于我</SectionHeading>
      <p className="mb-3">
        我也是一个终身学习者，对新技术抱有很大的兴趣，喜欢不断的探索。
        我喜欢Coding中解决问题的过程，它让人很投入，进入
        <span className="font-bold">心流</span>状态。
        自从毕业以后一直身居开发一线，对前端技术有着深刻的理解。我的主要技术栈是{" "}
        <span className="font-bold">React、Next、Taro、Node</span>
        ，对TypeScript也比较熟， 同时对
        <span className="font-bold">后端技术</span>
        比较感兴趣（Node），希望以后有机会从事相关工作。{" "}
      </p>

      <p>
        <span className="italic">当我空闲的时候</span>， 我经常去运动，
        <span className="font-bold">跑步、爬山、骑行</span>
        ，内啡肽带来的快乐是长久的！ 有时我也会去学习一些
        <span className="font-medium">新东西</span>。比如最近正在尝试自己做饭，
        算然有待改进，但也是一大进步
      </p>
    </motion.section>
  );
}
