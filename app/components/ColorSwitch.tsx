"use client";
import { ReactElement, useEffect, useState } from "react";
import { DarkIcon } from "./icons/color-scheme/Dark";
import { LightIcon } from "./icons/color-scheme/Light";

export function ColorSwitch(): ReactElement {
  const [currentColor, setCurrentColor] = useState<"light" | "dark">("light");

  function toggleColorScheme() {
    const isDarkMode = document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark");
    setCurrentColor((prev) => (isDarkMode ? "light" : "dark"));
  }

  useEffect(() => {
    const savedScheme = localStorage.getItem("color-scheme") as
      | "light"
      | "dark";
    if (savedScheme) {
      if (savedScheme === "dark") {
        document.documentElement.classList.add("dark");
        setCurrentColor("dark");
      } else if (savedScheme === "light") {
        document.documentElement.classList.remove("dark");
        setCurrentColor("light");
      }
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setCurrentColor("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setCurrentColor("light");
      }
    }
  }, []);

  return (
    <button
      onClick={toggleColorScheme}
      className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-white/5  transition-colors aspect-square border border-gray-200 dark:border-gray-700"
    >
      {currentColor === "dark" ? (
        <DarkIcon className="h-4 w-4" />
      ) : (
        <LightIcon className="h-4 w-4" />
      )}
    </button>
  );
}
