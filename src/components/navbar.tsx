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
import {
  CloseButton,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { Bars2Icon, ChevronDownIcon } from "@heroicons/react/16/solid";
import { NavbarProps } from "@/lib/types";
import clsx from "clsx";

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
          <Link
            key={item.name}
            href={item.href}
            className={`px-3 py-1.5 rounded-lg ${pathname === item.href ? "bg-green-700 font-bold" : "text-white"}`}
          >
            {item.name}
          </Link>
        ))}
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm uppercase font-semibold border border-white/5 bg-white/5 p-1 text-white">
            {currentLang}
            <ChevronDownIcon className="size-4 fill-white/60" />
          </MenuButton>
          <MenuItems
            transition
            anchor="bottom start"
            className="flex flex-col w-20 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white"
          >
            <MenuItem
              as="button"
              type="button"
              className={clsx("uppercase", {
                "font-bold": currentLang === "en",
              })}
              onClick={() => changeLanguage("en")}
            >
              en
            </MenuItem>
            <div className="my-1 h-px bg-white/5" />
            <MenuItem
              as="button"
              type="button"
              className={clsx("uppercase", {
                "font-bold": currentLang === "fr",
              })}
              onClick={() => changeLanguage("fr")}
            >
              fr
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>

      {/* the popover for the mobile menu */}
      <Popover className="flex lg:hidden absolute px-5 md:px-10 end-0">
        {({ open }) => (
          <>
            <PopoverButton className="text-sm font-semibold text-white focus:outline-none">
              <Bars2Icon className="size-8 text-white" />
            </PopoverButton>
            <PopoverBackdrop className="fixed inset-0 bg-black/15" />
            <PopoverPanel
              transition
              anchor="bottom end"
              className="w-60 h-fit md:w-96 z-10 flex flex-col gap-1.5 bg-sky-950 p-10 text-sm rounded-lg transition duration-200 ease-in-out"
            >
              {navItems.map((item: any) => (
                <CloseButton
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg ${pathname === item.href ? "bg-green-700 font-bold" : "text-white"}`}
                >
                  {item.name}
                </CloseButton>
              ))}
              <div className="my-1 h-px bg-white/5" />
              <CloseButton
                as="button"
                type="button"
                className={clsx("font-white px-3 py-1.5 self-start", {
                  "font-bold": currentLang === "en",
                })}
                onClick={() => changeLanguage("en")}
              >
                {currentLang === "en" ? <>English</> : <>Anglais</>}
              </CloseButton>
              <CloseButton
                as="button"
                type="button"
                className={clsx("font-white px-3 py-1.5 self-start", {
                  "font-bold": currentLang === "fr",
                })}
                onClick={() => changeLanguage("fr")}
              >
                {currentLang === "fr" ? <>Français</> : <>French</>}
              </CloseButton>
            </PopoverPanel>
          </>
        )}
      </Popover>
    </nav>
  );
}
