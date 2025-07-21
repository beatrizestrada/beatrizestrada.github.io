import "@/globals.css";
import Head from "next/head";
import { NavLink } from "./components/NavLink";
import { Socials } from "./components/Socials";
import { ColorSwitch } from "./components/ColorSwitch";
import { Menu } from "./components/Menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beatriz Campos Estrada PhD",
  description:
    "Postdoctoral researcher at the Max Planck Institute for Astronomy, focused on connecting theory to observations of exoplanets via different modelling techniques",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const displayDate = process.env.DEPLOY_DATE
    ? "Last updated: " +
      new Date(process.env.DEPLOY_DATE).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <html lang="en">
      <Head>
        <title>Beatriz Campos Estrada PhD</title>
        <meta
          name="description"
          content="Postdoctoral researcher at the Max Planck Institute for Astronomy, focused on connecting theory to observations of exoplanets via different modelling techniques"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link href="/dist/styles.css" rel="stylesheet" />
      </Head>
      <body className="dark:bg-zinc-900 dark:text-zinc-100 pb-11 sm:pb-7">
        <header className="flex sticky top-0 bg-white/90 space-x-4 border-b border-b-gray-200 dark:border-b-gray-700 dark:bg-zinc-900/95">
          <div className="flex container mx-auto justify-between items-center p-4 w-full xl:max-w-7xl">
            <nav className="hidden sm:flex space-x-2">
              <NavLink href="/">about</NavLink>
              <NavLink href="/publications">publications</NavLink>
              <NavLink href="/CamposEstrada_CV.pdf">cv</NavLink>
              <NavLink href="/CamposEstrada_thesis.pdf">thesis</NavLink>
            </nav>
            <Menu />
            <div className="flex items-center gap-6">
              <Socials />
              <ColorSwitch />
            </div>
          </div>
        </header>
        <div className="container mx-auto py-8 px-4 xl:max-w-7xl">
          {children}
        </div>
        <footer className="fixed w-full flex justify-center p-1.5 bottom-0 bg-primary-50 dark:bg-zinc-800">
          <p className="text-xs text-center">
            © Copyright 2025 Beatriz Campos Estrada. Inspired by{" "}
            <a
              href="https://github.com/alshedivat/al-folio"
              target="_blank"
              rel="noopener noreferrer"
            >
              al-folio
            </a>
            {"  "}
            theme. {displayDate}
          </p>
        </footer>
      </body>
    </html>
  );
}
