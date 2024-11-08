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
    <main className="relative h-fit mx-5 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-96 pb-24">
      <Navbar navItems={navItems} currentLang={lang} />
      {children}
    </main>
  );
}
