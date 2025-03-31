import { JWT } from "next-auth/jwt"
import NextAuth, { User } from "next-auth"

declare module "next-auth" {
  interface Session {
   user:ApplicationUser,
   token:string
     // Add token to the session type (mark it as optional)
  }


  interface User{
   token:string;
   user:ApplicationUser
  }
  interface Profile{
   name:string
  }
}



declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends User {}
}