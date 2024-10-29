import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { getTranslatedNavItems } from "@/lib/translations/navigation";

export const metadata: Metadata = {
  title: "NexGen Agency",
  description: "NexGen Agency",
};

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const { lang } = params;
  const navItems = await getTranslatedNavItems(lang);
  return (
    <>
      <Navbar navItems={navItems} currentLang={lang} />
      {children}
    </>
  );
}
