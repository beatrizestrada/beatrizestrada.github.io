"use client";
import "@/globals.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { NavLink } from "./components/NavLink";
import { Socials } from "./components/Socials";
import { ColorSwitch } from "./components/ColorSwitch";
import { Menu } from "./components/Menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");

  function toggleColorScheme() {
    setColorScheme((prevScheme) => {
      const newScheme = prevScheme === "light" ? "dark" : "light";
      localStorage.setItem("color-scheme", newScheme);
      return newScheme;
    });
  }

  useEffect(() => {
    const savedScheme = localStorage.getItem("color-scheme") as
      | "light"
      | "dark";
    if (savedScheme) {
      setColorScheme(savedScheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setColorScheme(prefersDark ? "dark" : "light");
    }
  }, []);

  return (
    <html lang="en" data-theme={colorScheme}>
      <Head>
        <title>Beatriz Campos Estrada PhD</title>
        <meta
          name="description"
          content="Postdoctoral researcher at the Max Planck Institute for Astronomy, focused on connecting theory to observations of exoplanets via different modelling techniques"
        />
        <link href="/dist/styles.css" rel="stylesheet" />
      </Head>
      <body className="dark:bg-zinc-900 dark:text-zinc-100">
        <header className="flex sticky top-0 bg-white/90 space-x-4 border-b border-b-gray-200 dark:border-b-gray-700 dark:bg-zinc-900/95">
          <div className="flex container mx-auto justify-between items-center p-4 w-full">
            <nav className="hidden sm:flex space-x-2">
              <NavLink href="/">about</NavLink>
              <NavLink href="/publications">publications</NavLink>
              <NavLink href="/CamposEstrada_CV.pdf">cv</NavLink>
              <NavLink href="/CamposEstrada_thesis.pdf">thesis</NavLink>
            </nav>
            <Menu />
            <div className="flex items-center gap-6">
              <Socials />
              <ColorSwitch
                currentColor={colorScheme}
                toggle={toggleColorScheme}
              />
            </div>
          </div>
        </header>
        <div className="container mx-auto py-8 px-4">{children}</div>
      </body>
    </html>
  );
}
