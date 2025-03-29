import { NextRequest, NextResponse } from 'next/server';
import { setCookie } from 'nookies';

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json(); // assuming token is passed in the request body

    // Set the cookie with your custom domain
    setCookie({ res: NextResponse }, 'sessionToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // secure cookie in production
      sameSite: 'none', // needed for cross-origin cookies
      maxAge: 60 * 60 * 24, // 1 day
      domain: process.env.NODE_ENV === 'production' ? 'elevatenext.vercel.app' : 'localhost', // custom domain for prod, localhost for dev
    });

    return NextResponse.json({ message: 'Cookie set successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error setting cookie', error }, { status: 500 });
  }
}
