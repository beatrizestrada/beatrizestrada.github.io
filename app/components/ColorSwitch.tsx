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
      className="text-gray-500 hover:text-primary-800 dark:hover:text-primary-100 p-2 rounded-sm hover:bg-primary-50 dark:hover:bg-primary-500/5 aspect-square border border-gray-200 dark:border-gray-700"
    >
      <span className="block relative h-4 w-4">
        <span
          className={`absolute inset-0 transition-opacity ${
            currentColor === "dark" ? "opacity-100" : "opacity-0"
          }`}
        >
          <DarkIcon className="h-4 w-4" />
        </span>
        <span
          className={`absolute inset-0 transition-opacity ${
            currentColor === "light" ? "opacity-100" : "opacity-0"
          }`}
        >
          <LightIcon className="h-4 w-4" />
        </span>
      </span>
    </button>
  );
}
