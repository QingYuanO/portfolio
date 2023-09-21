"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-[999] [--x:0] sm:[--x:-50%]">
      <motion.div
        className=" fixed inset-x-0 top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:left-1/2 sm:top-[1.5rem] sm:h-[3.25rem] sm:w-[36rem] sm:-translate-x-1/2 sm:rounded-full "
        initial={{ opacity: 0, y: -100, x: "var(--x)" }}
        animate={{ opacity: 1, y: 0, x: "var(--x)" }}
      ></motion.div>
      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-base font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="flex h-3/4 items-center justify-center"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                href={link.hash}
                className="flex w-full items-center justify-center p-3 transition hover:text-gray-950"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
