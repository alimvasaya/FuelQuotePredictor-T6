import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import { connectMongo } from '../../../../../server/mongodb';
import UserCredentials from '../../../../../server/models/UsersModel/UserCredentials.model';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'Email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials) {
        await connectMongo();

        const user = await UserCredentials.findOne({
          email: credentials?.email,
        }).select('+password');

        if (!user) {
          throw new Error('Incorrect credentials');
        }

        const correctPass = await compare(credentials!.password, user.password);

        if (correctPass === false) {
          throw new Error('Incorrect credentials');
        } else {
          return user;
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '/auth/SignForm',
    signOut: '/auth/signout',
    error: '/',
    newUser: '/clientPage/completeProfile/page',
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
        token.dataCompleted = user.dataCompleted;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.dataCompleted = token.dataCompleted;
      }
      return session;
    },
  },
};
