import { NextResponse } from 'next/server';

/**
 * Single public download entry point. Redirects only to an explicitly configured
 * release URL. An unconfigured release returns visitors to the download center.
 */
export function GET(request: Request) {
  const releaseUrl = process.env.NEXT_PUBLIC_RELEASE_URL;
  if (!releaseUrl) {
    const fallback = new URL('/?download=unavailable#download', request.url);
    return NextResponse.redirect(fallback, 302);
  }

  try {
    const target = new URL(releaseUrl);
    if (target.protocol !== 'https:' || !target.hostname) {
      return NextResponse.redirect(new URL('/?download=unavailable#download', request.url), 302);
    }
    return NextResponse.redirect(target, 302);
  } catch {
    return NextResponse.redirect(new URL('/?download=unavailable#download', request.url), 302);
  }
}
