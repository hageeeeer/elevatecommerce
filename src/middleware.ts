import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const privatePage = new Set(['/cart','/dashboard'])

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if(privatePage.has(req.nextUrl.pathname)){
  if (token) 
    return NextResponse.next()
    
    const redirectUrl = new URL('/',req.nextUrl.origin)
    return NextResponse.redirect(redirectUrl)
}
  return NextResponse.next()
}

export const config = {
  matcher: ['/cart','/dashboard'],
}