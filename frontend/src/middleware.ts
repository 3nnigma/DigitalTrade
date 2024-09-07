import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest){
  const {url, cookies} = request;
  
  const refreshToken = cookies.get("refresh")?.value;

  const isAuthPage = url.includes("/auth")
  
  if(isAuthPage && refreshToken){
    return NextResponse.redirect(new URL('/dashboard', url))
  }
  if(isAuthPage){
    return NextResponse.next()
  }

  if(!refreshToken){
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/auth/:path*', '/dashboard/:path']
}
