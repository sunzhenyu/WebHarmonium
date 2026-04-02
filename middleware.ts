import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') ||
    pathname.startsWith('/sitemap') ||
    pathname.startsWith('/robots') ||
    pathname.startsWith('/instrument') ||
    pathname.startsWith('/privacy')
  ) {
    return NextResponse.next();
  }

  // If path starts with /hi, let it through (Hindi pages)
  if (pathname.startsWith('/hi')) {
    return NextResponse.next();
  }

  // For all other paths, rewrite to /en (English default, but URL stays clean)
  if (!pathname.startsWith('/en')) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|static|.*\\..*|sitemap|robots).*)'],
};
