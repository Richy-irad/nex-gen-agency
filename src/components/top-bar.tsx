"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo.jpg";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Topbar({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();
  const router = useRouter();

  // method to change the language
  const changeLanguage = (locale: string) => {
    // use the current lang and locale to change the router
    const newPath = pathname.replace(currentLang, locale);
    return router.push(newPath);
  };

  return (
    <div className="flex gap-4 w-full items-center justify-center">
      <div className="flex gap-2 lg:gap-4 items-center justify-center">
        <Image
          src={logo}
          alt="logo"
          className="w-12 h-12 lg:w-16 lg:h-16 rounded-lg"
        />
        <h1 className="text-2xl lg:text-4xl font-bold">NexGen Agency</h1>
      </div>
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm uppercase font-semibold border border-white/5 bg-white/5 p-1 text-white">
          {currentLang}
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom start"
          className="flex flex-col w-20 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white"
        >
          <MenuItem as="div">
            <button
              type="button"
              className="uppercase"
              onClick={() => changeLanguage("en")}
            >
              en
            </button>
          </MenuItem>
          <MenuItem as="div">
            <button
              type="button"
              className="uppercase"
              onClick={() => changeLanguage("fr")}
            >
              fr
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
