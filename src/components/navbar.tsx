/**
 * The Navbar component.
 *
 * Renders at the top of each page, with navigational functions
 */

"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../public/logo.jpg";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { NavbarProps } from "@/lib/types";

export default function Navbar({ navItems, currentLang }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  /**
   * Changes the language used in the application
   *
   * Uses `currentLang` and `locale` to change the router
   */
  const changeLanguage = (locale: string) => {
    const newpath = pathname.replace(currentLang, locale);
    return router.push(newpath);
  };
  return (
    <nav className="flex items-center justify-between py-12">
      <div className="flex gap-2 lg:gap-4 items-center">
        <Image
          src={logo}
          alt="logo"
          className="w-8 h-8 lg:w-12 lg:h-12 rounded-lg"
        />
        <h1 className="text-2xl lg:text-4xl font-bold">NexGen Agency</h1>
      </div>
      <div className="hidden lg:flex gap-2 lg:gap-4 items-center">
        {navItems.map((item: any) => (
          <Link key={item.name} href={item.href}>
            {item.name}
          </Link>
        ))}
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
    </nav>
  );
}
