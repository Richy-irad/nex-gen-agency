import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { getTranslatedNavItems } from "@/lib/translations/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexGen Agency",
  description: "NexGen Agency",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const { lang } = params;
  const navItems = await getTranslatedNavItems(lang);
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-fit mx-5 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-96 pb-24 bg-gradient-to-br from-indigo-950 via-sky-950 to-cyan-950 text-white`}
      >
        <Navbar navItems={navItems} currentLang={lang} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
