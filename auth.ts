import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

import { encodeBase64 } from "./lib/utils";
import GitHub from "next-auth/providers/github";
import { getJwt, getUserData } from "./lib/data";

export const config = {
  theme: {
    logo: "https://odestopolanco.netlify.app/_next/static/media/logo.23423a84.svg",
  },
  providers: [
    GitHub,
    CredentialsProvider({
      id: "username-password-login",
      name: "user and password",
      // @ts-ignore
      async authorize(credentials, req) {
        const encodedCredentials = encodeBase64(
          `${credentials.username}:${credentials.password}`
        );

        const response = await getJwt(encodedCredentials);

        if (response?.error) {
          console.log(response);
          return null;
        }

        const jwt = response.access_token;

        const userData = await getUserData(String(credentials.username), jwt);
        console.log(jwt);
        console.log(userData);
        console.log(userData);

        if (userData.active) {
          return {
            ...credentials,
            jwt,
            name: `${userData.userName} ${userData.lastName}`,
            email: userData.email,
            image: userData.profilePicture,
          };
        } else return null;
      },
      credentials: {
        username: {
          label: "Username",
          type: "text ",
          placeholder: "Juan Perez",
        },
        password: { label: "Password", type: "password" },
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          ...token,
          // jwt: user.jwt,
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        // @ts-ignore
        session.jwt = token.jwt;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
