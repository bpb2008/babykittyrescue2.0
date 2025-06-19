import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { type NextAuthConfig } from "next-auth"; 
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/db/drizzle"; 
import { user } from "@/db/schema";

export const authConfig = {
  // adapter: DrizzleAdapter(db),
  // providers: [
  //   GoogleProvider({
  //     clientId: process.env.GOOGLE_CLIENT_ID!, 
  //     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  //   }),
  // ], 
  // callbacks: {
  //   session: async ({ session, user }) => {
  //     session.user.id = user.id;
  //     return session; 
  //   }, 
  // }, 
  // session: {
  //   strategy: "database", 
  // }, 
  // pages: {
  //   signIn: "/login", 
  // },
  // secret: process.env.NEXTAUTH_SECRET, 
} satisfies NextAuthConfig; 