import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from 'next/server';

let locales = ['en-US', 'ru-RU', 'he'];

function getLocale(request: NextRequest) {
  let headers = { 'accept-language': request.headers.get('accept-language') || 'en-US,en;q=0.5' };
  let languages = new Negotiator({ headers }).languages();
  let matchedLocale = match(languages, locales, 'en-US');

  return locales.find((locale) => locale.startsWith(matchedLocale)) || 'en-US';
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware completely for root path
  if (pathname === '/') {
    return NextResponse.next();
  }

  // Skip static files and API routes
  if (pathname.startsWith('/_next') || 
      pathname.includes('.') || 
      pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - files with extensions (.jpg, .png, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
