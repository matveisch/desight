import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from 'next/server';

let locales = ['en-US', 'ru-RU', 'he'];

// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest) {
  let headers = { 'accept-language': request.headers.get('accept-language') || 'en-US,en;q=0.5' };
  let languages = new Negotiator({ headers }).languages();
  let matchedLocale = match(languages, locales, 'en-US');

  // return match(languages, locales, defaultLocale);
  return locales.find((locale) => locale.startsWith(matchedLocale)) || 'en-US';
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      `${request.url.toString().replace(/\/$/, '')}/${locale}${pathname}`
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
