// import { getToken } from "next-auth/jwt";
// import { NextRequest, NextResponse } from "next/server";

// const privatePage = new Set(['/cart','/dashboard'])

// export default async function middleware(req: NextRequest) {
//   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
//   if(privatePage.has(req.nextUrl.pathname)){
//   if (token) 
//     return NextResponse.next()
    
//     const redirectUrl = new URL('/',req.nextUrl.origin)
//     return NextResponse.redirect(redirectUrl)
// }
//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/cart','/dashboard'],
// }

import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

const privatePages = new Set(['/cart', '/dashboard']); // Protected routes

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (privatePages.has(req.nextUrl.pathname)) {
    if (token) {
     
      return NextResponse.next(); // User is authenticated, continue to the protected page
    }

    // User is not authenticated, redirect to login page
    const loginUrl = new URL('/auth/login', req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next(); // Continue normally for non-protected routes
}

export const config = {
  matcher: ['/cart', '/dashboard'], // Define the routes to be protected
};
