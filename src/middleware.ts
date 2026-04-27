import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname
  
  const needsAuth = currentPath.startsWith('/scrape') || 
      currentPath.startsWith('/theme_detector') || 
      currentPath.startsWith('/app_detector')
  
  if (!needsAuth) {
    return NextResponse.next()
  }
  
  // Check for any Supabase auth cookie (starts with sb- and contains auth/session)
  const allCookies = request.cookies.getAll()
  const supabaseCookie = allCookies.find(c => 
    c.name.startsWith('sb-') && c.name.includes('auth')
  )
  
  if (!supabaseCookie) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/scrape', '/theme_detector', '/app_detector'],
}