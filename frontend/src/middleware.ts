
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { cookies, nextUrl } = request;

  const refreshToken = cookies.get("refresh")?.value;

  const isAuthPage = nextUrl.pathname.startsWith("/auth");
  const isAppPage = nextUrl.pathname.startsWith("/app");
  const isPaymentPage = nextUrl.pathname.startsWith("/payment");
  const isHomePage = nextUrl.pathname === "/";

  if ((isAuthPage || isHomePage) && refreshToken) {
    return NextResponse.redirect(new URL("/app/dashboard", request.url));
  }
  if (isAuthPage) {
    return NextResponse.next();
  }

  if ((isAppPage || isPaymentPage) && !refreshToken) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth/:path*", "/payment", "/app/:path"],
};
