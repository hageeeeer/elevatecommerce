import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

const privatePages = new Set(['/cart', '/dashboard', '/allOrders']); // Protected routes

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  // const roles = {
  //   admin:['/dashboard','/categories','/products'],
  //   user:['/categories','/products','/cart','/allOrders','/checkout','/productdetails']
  // }

  // const currentUrl = req.nextUrl.pathname 
  // const pathosOfroles = roles?.[token?.user?.role as keyof typeof roles] 
  
  // if(pathosOfroles.indexOf(currentUrl) === -1)
  //   return NextResponse.rewrite(new URL('/denied',req.url))

  if (privatePages.has(req.nextUrl.pathname)) {
    if (token) {
      return NextResponse.next();
    }
    const loginUrl = new URL('/auth/login', req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next(); // Continue normally for non-protected routes
}

export const config = {
  matcher: ['/cart', '/dashboard', '/allOrders'] // Define the routes to be protected
};
