import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

let locales = ["fr", "en"];

function getLocale() {
  let headers = { "accept-language": "fr, en" };
  let languages = new Negotiator({ headers }).languages();
  let defaultLocale = "fr";

  return match(languages, locales, defaultLocale);
}

export default function middleware(request: NextRequest) {
  // check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // redirect if there is no locale
  const locale = getLocale();
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // the new URL is now /en-CA/products

  return NextResponse.redirect(request.nextUrl);
}

// configurations. Skips all internal paths
export const config = {
  matcher: [
    // skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)",
    // Optional: only run on root (/) url
    "/",
  ],
};
