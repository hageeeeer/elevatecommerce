import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { fetchlogin } from "./app/auth/login/actions/login.action";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {

    pages: {
        signIn: "/auth/login", // Custom sign-in page
    },
    session: {
        strategy: "jwt", // JWT session strategy
        maxAge: 60 * 15, // 15 minutes session expiration
    },

    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
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
            try {
                const response = await fetchlogin({
                    email: credentials?.email,
                    password: credentials?.password,
                });

                const User: ApiResponse<{ token: string; user: ApplicationUser }> = await response.json();
                // If there's an error with the login, throw an error
                // If the response has an error code or invalid credentials
                if ("error" in User || !User.token || !User.user) {
                    throw new Error("Invalid credentials");
                } 
                if(User.message==="success")
                {
                return {
                    token: User.token,
                    id: User.user._id,
                    user: User.user,
                }}
                throw new Error("Authentication failed");  
            } catch (error) {
                console.error("Error during authentication:", error);
                throw new Error("Authentication failed");  
            }

            }

        }),
    ],
    callbacks: {
        async jwt({ token, user, profile }) {

            if (profile) {
                token.user = {
                    firstName: profile.name || '',
                    _id: '',
                    email: '',
                    gender: '',
                    lastName: '',
                    phone: '',
                    photo: '',
                    role: ''
                }
            }

            else if (user) {
                // Merge the token and user into the JWT token
                token.token = user.token;
                token.user = user.user;
            }

            return token;
        },

        async session({ session, token }) {
            // Merge the user and token into the session, so you can access it in the frontend
            session.user = token.user;
            session.token = token.token;

            return session;
        },
    },
};
