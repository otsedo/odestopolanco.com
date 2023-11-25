import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

import { encodeBase64 } from "./lib/utils";
import GitHub from "next-auth/providers/github";

const API_USER_BY_EMAIL_END_POINT: string =
  process.env.API_USER_BY_EMAIL_END_POINT || "";
const AUTHENTICATION_SCOPE: string = process.env.AUTHENTICATION_SCOPE || "";
const AUTH_SERVER_URL: string = process.env.AUTHENTICATION_URL || "";
const AUTHENTICATION_GRANT_TYPE: string =
  process.env.AUTHENTICATION_GRANT_TYPE || "";

async function getJwt(credentials: string) {
  const response = await fetch(AUTH_SERVER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${credentials}`,
    },
    body: new URLSearchParams({
      grant_type: AUTHENTICATION_GRANT_TYPE,
      scope: AUTHENTICATION_SCOPE,
    }),
  });
  const data = await response.json();
  return data;
}

async function getUserData(email: String, jwt: string) {
  const response = await fetch(`${API_USER_BY_EMAIL_END_POINT}${email}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  const data = await response.json();
  return data;
}

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
          return null;
        }

        const jwt = response.access_token;

        const userData = await getUserData(String(credentials.username), jwt);

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
