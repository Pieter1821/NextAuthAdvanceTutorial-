import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import authConfig from '@/auth.config';
import { db } from '@/lib/db';
import { getUserById } from '@/data/user';

const prisma = new PrismaClient();

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",


  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },

  callbacks: {
      async signIn({ user  , account  }) {
        console.log(user, account)


        // Allow OAuth without email verification 
        if (account?.provider !== "credentials")return true;
        
        const existingUser = await getUserById(user.id);
        

        // Prevent sign in without email verification
        if (!existingUser?.emailVerified) return false
        // TODO ADD  2FA CHECK
        return true
      },  


    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role) {
        session.user.role = token.role;
      }

      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },

  ...authConfig,
});
