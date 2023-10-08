import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "首页",
    hash: "#home",
  },
  {
    name: "关于",
    hash: "#about",
  },
  {
    name: "项目",
    hash: "#projects",
  },
  {
    name: "技能",
    hash: "#skills",
  },
  {
    name: "经历",
    hash: "#experience",
  },
  {
    name: "联系我",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "桂林电子科技大学信息科技学院",
    location: "广西桂林",
    description:
      "大学本科，软件工程专业，在这里度过了愉快的大学生活。",
    icon: React.createElement(LuGraduationCap),
    date: "2016-2020",
  },
  {
    title: "前端开发工程师",
    location: "广西柳州",
    description:
      "大四那年在柳州实习了一年，在那里我通过自学React,从此走上了前端开发的道路，提一句，挺怀念那的螺蛳粉的",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "前端开发工程师",
    location: "广东深圳",
    description:
      "正式从事的第一份工作，在这里开始接触微信小程序、RN等移动端的东西，第一次完整的独立写完一整个项目。",
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
  {
    title: "前端开发工程师",
    location: "广东深圳",
    description:
      "开始接触Taro，并独立负责了一个项目，开始喜欢上Tailwind，觉得不用起类名真的太棒了。",
    icon: React.createElement(FaReact),
    date: "2021 - 至今",
  },
] as const;

export const projectsData = [
  {
    title: "爱文集",
    description:
      "爱⽂集是⼀款集阅读/收集⽂章、推⼴植⼊、获取客⼾线索等功能的综合性⽂章营销⼩程序⼯具。",
    tags: ["React", "Taro", "Redux", "Redux Toolkit", "Tailwind"],
    imageUrl: "/aiwenji.png",
  },
  {
    title: "菜菜到家",
    description:
      "菜菜到家是⼀整套电商系统，包含⼩程序、ios、android平台渠道以及相应的后台管理。",
    tags: [
      "React",
      "TypeScript",
      "Expo",
      "React Native",
      "Redux",
      "原生小程序",
    ],
    imageUrl: "/ccdj.jpg",
  },
  {
    title: "风控系统",
    description:
      "公司的主营项⽬，已经迭代5年，基于此系统，搭建了⼀系列定制化的中后台。",
    tags: ["React", "Redux", "React PDF", "Antd"],
    imageUrl: "/fk.png",
  },

  {
    title: "资产管理App",
    description:
      "该项⽬主要的需求是完成⼀个资产管理的 APP ，主要⽤于管理甲⽅内部的各种资产。",
    tags: ["React", "TypeScript", "Expo", "React Native", "Redux"],
    imageUrl: "/zcgl.jpg",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Taro",
  "Umi",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "React Toolkit",
  "Zustand",
  "Jotai",
  "Radix",
  "Ant Design",
  "Tamagui",
  "Framer Motion",
  "Webpack",
  "Vite",
] as const;
