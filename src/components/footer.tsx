"use client";

import { InstagramLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <div className="w-full flex items-center justify-between py-8">
      <h1 className="text-4xl font-bold">NexGen Agency</h1>
      <p>NexGen Agency © 2024. All rights reserved.</p>
      <div className="flex gap-x-4">
        <InstagramLogo size={32} weight="bold" />
      </div>
    </div>
  );
}
