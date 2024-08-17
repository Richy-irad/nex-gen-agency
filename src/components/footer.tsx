"use client";

import { InstagramLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-y-6 justify-between py-4 lg:py-8">
      <h1 className="text-4xl font-bold">NexGen Agency</h1>
      <p className="text-zinc-300">NexGen Agency © 2024. All rights reserved.</p>
      <div className="flex gap-x-4">
        <InstagramLogo size={32} weight="bold" />
      </div>
    </div>
  );
}
