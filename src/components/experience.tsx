"use client";
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";
export default function Experience() {
  const { ref } = useSectionInView("经历");
  const { theme } = useTheme();
  const { ref: eRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section
      ref={ref}
      id="experience"
      className="relative mb-28 w-[min(100%,60rem)] scroll-mt-28 sm:mb-40"
    >
      <div ref={eRef} className="absolute inset-0 -z-0"></div>
      <SectionHeading>经历</SectionHeading>
      <VerticalTimeline lineColor="" animate>
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            visible={inView}
            key={index}
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="!mt-0 font-normal">{item.location}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
