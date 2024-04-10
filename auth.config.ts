import bcrypt from 'bcryptjs';

import type { NextAuthConfig } from 'next-auth';
import credentials from 'next-auth/providers/credentials';

import { LoginSchema } from '@/schemas';
import { getUserByEmail } from './data/user';

// Exporting the default configuration for NextAuth
export default {
  providers: [
    // Using the credentials provider for authentication
    credentials({
      async authorize(credentials) {
        // Validating the credentials using LoginSchema
        const validatedFields = LoginSchema.safeParse(credentials);

        // If validation fails, return null
        if (!validatedFields.success) {
          return null;
        }

        const { email, password } = validatedFields.data;

        // Getting user by email
        const user = await getUserByEmail(email);

        // If user not found or password not set, return null
        if (!user || !user.password) {
          return null;
        }

        // Comparing the password provided with the hashed password in the database
        const passwordsMatch = await bcrypt.compare(password, user.password);

        // If passwords  match, return user
        if (passwordsMatch) {
          return user;
        }
        return null;
      },
    }),
  ],
} as NextAuthConfig;
