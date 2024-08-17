import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexGen Agency",
  description: "NexGen Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-fit mx-5 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-96 pb-24 mt-20 lg:mt-24`}
      >
        {children}
      </body>
    </html>
  );
}
