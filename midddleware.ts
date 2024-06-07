import { NextRequest, NextResponse } from "next/server";

const auth_routes = ["/" ,"/login", "/signup"];
const customerpath = ["/dashboard/:path*"];
const accountantpath = ["/accountant/:path*"]
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const user: any = req.cookies.get("user-data")?.value;
  console.log(user)

}
export const config = {
    matcher: ["/","/login",],
  };