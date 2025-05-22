import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/docs") {
    return NextResponse.redirect(new URL("/docs/introduction", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/docs",
};
