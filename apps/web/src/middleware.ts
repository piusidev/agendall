import { type NextRequest, NextResponse } from 'next/server'

import { createClient } from '@agendall/supabase/server'
import { updateSession } from '@agendall/supabase/middleware'

import { routes } from '@/modules/shared/config/routes'

export async function middleware(request: NextRequest) {
  const response = await updateSession(request)
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user && !request.nextUrl.pathname.startsWith('/auth')) {
    const url = request.nextUrl.clone()
    url.pathname = routes.auth.login

    return NextResponse.redirect(url)
  }

  if (user && request.nextUrl.pathname.startsWith('/auth')) {
    const url = request.nextUrl.clone()
    url.pathname = routes.dashboard

    return NextResponse.redirect(url)
  }

  const hasPassedOnboarding = user?.user_metadata?.has_passed_onboarding

  if (
    user &&
    !hasPassedOnboarding &&
    !request.nextUrl.pathname.startsWith('/onboarding')
  ) {
    const url = request.nextUrl.clone()
    url.pathname = routes.onboarding.root

    return NextResponse.redirect(url)
  }

  if (
    user &&
    hasPassedOnboarding &&
    request.nextUrl.pathname.startsWith('/onboarding')
  ) {
    const url = request.nextUrl.clone()
    url.pathname = routes.dashboard

    return NextResponse.redirect(url)
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
