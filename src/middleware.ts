import { NextRequest, NextResponse } from "next/server";
export function middleware(request: NextRequest) {
  if (
    request.nextUrl.origin == "http://localhost:3000" &&
    request.nextUrl.pathname == "/test"
  ) {
    console.log("by");
    // NextResponse.rewrite(new URL("https://www.google.com"));
  }

  return null;
}

export const config = {
  matcher: "/test",
};
