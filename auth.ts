import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import authConfig from '@/auth.config';
import { db } from './lib/db';

const prisma = new PrismaClient();

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ session, token }) {
      console.log({ sessionToken: token, session });

      if (session.user) {
        session.user.customField = token.customField;
      }
      return session;
    },

    async jwt({ token }) {
      console.log({ token });
      token.customField = 'test';
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
});
