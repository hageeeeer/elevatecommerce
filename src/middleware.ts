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

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const privatePages = new Set(['/cart', '/dashboard']); // Add your protected routes here

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  
  // Check if the current page is a private one (like /cart or /dashboard)
  if (privatePages.has(req.nextUrl.pathname)) {
    if (token) {
      return NextResponse.next(); // Proceed if the user is authenticated
    }

    const callbackUrl = req.nextUrl.pathname; // Store the current URL (e.g., /cart)
    const redirectUrl = new URL('/auth/login', req.nextUrl.origin); // Redirect to login page
    redirectUrl.searchParams.set('callbackUrl', callbackUrl); // Add the callbackUrl as query parameter

    return NextResponse.redirect(redirectUrl); // Redirect the user to the login page
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/cart', '/dashboard'], // Match protected routes
};
