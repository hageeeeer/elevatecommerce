import { Session } from "next-auth";
import { User } from './../src/app/auth/login/types/reslogin.type';

declare module "next-auth" {
  interface Session {
    token?: string; 
     // Add token to the session type (mark it as optional)
  }

  interface Session extends DefaultSession {
    accessToken?: string;
  }

  interface User{
    firstName?:string
  }
}

