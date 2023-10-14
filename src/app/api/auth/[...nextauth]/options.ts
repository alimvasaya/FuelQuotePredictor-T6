import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import ToasterContext from "@/app/context/ToasterContext";
import toast, { Toaster } from "react-hot-toast";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        // Fetch user data here => dummy data
        const user = {
          id: "1",
          email: "johnsmith@gmail.com",
          password: "js",
          role: "client", // change between admin and client for testing
        };

        // Check if email and password is entered
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter an email and password");
        }

        // Check if user exists
        // if (!user) {
        //   throw new Error("No user found");
        // }

        // Check if credentials match => use bcrypt
        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          throw new Error("Incorrect credentials");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/SignForm",
    signOut: "/auth/signout",
    error: "http://localhost:3000",
    newUser: "/clietPage/completeProfile/page",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.email = token.email;
      }
      return session;
    },
  },
};
