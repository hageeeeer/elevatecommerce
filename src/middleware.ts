import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


export default async function middleware(req:NextRequest)
{
  
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      return NextResponse.rewrite(new URL('/auth/login', req.url));
    }
     
    if (token&& req.nextUrl.pathname.startsWith('/auth/login')) {  
      return NextResponse.rewrite(new URL('/', req.url)); // Redirect to homepage if token exists
    }
    
    return NextResponse.next()
}

export const config = {
  matcher: ['/cart']
}