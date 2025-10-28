import { NextRequest, NextResponse } from "next/server";

export function middleware(reqest: NextRequest) {
  console.log("middleware: " + reqest.url);

  return NextResponse.next();
}

export const config = {};
