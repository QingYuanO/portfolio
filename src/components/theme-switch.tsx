"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      className="fixed bottom-5 right-5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem]  transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
