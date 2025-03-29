import GitHubProvider from "next-auth/providers/github";
import { fetchlogin } from "./app/auth/login/actions/login.action";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
   
         
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 15, // 15 minutes
  },
 
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        const response = await fetchlogin({
          email: credentials?.email,
          password: credentials?.password,
        });

        const User = await response.json();
        if (User.user?.email === credentials?.email) {
          return User; // Return the User object from your backend
        }

        throw new Error(User.message || "Invalid credentials");
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && account.provider === "github") {
        // If GitHub provider, save the access token into the JWT
        token.accessToken = account.access_token;
      }
      
      // Merge the user data into the token if available
      if (user) {
        token = { ...token, ...user };
      }

      return token;
    },

    async session({ session, token }) {
      // Merge the token into the session, so you can access the token in the frontend
      session.user = { ...session.user, ...token };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure this is set
};
