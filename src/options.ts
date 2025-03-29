import GitHubProvider from "next-auth/providers/github";
import { fetchlogin } from "./app/auth/login/actions/login.action";
import { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'



export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/auth/login'
    },
    session: {
        strategy: 'jwt',
        maxAge: 60 * 15
    },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        Credentials({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'email' },
                password: { label: 'password', type: 'password' }
            }
            ,
            authorize: async (credentials) => {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }
                const response = await fetchlogin({
                    email: credentials?.email,
                    password: credentials?.password
                })

                const User = await response.json()
                if (User.user.email === credentials?.email)
                    return User
                throw new Error(User.message)

            }
        }
        ),

    ],
    callbacks: {
        async jwt({ token, user, account }) {
            console.log('userrr', user);
            console.log('account', account);
            if (account && account.provider === 'github') {
                token.accessToken = account.access_token;
                return token
            }
           
            return { ...token, ...user }
        },
        async session({ session, token }) {
            return { ...session, ...token }
        }

    }
}