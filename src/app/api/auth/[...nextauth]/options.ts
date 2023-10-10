import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
        console.log("credentials: ", credentials);
        // Fetch user data here
        const user = {
          id: "1",
          email: "anh@gmail.com",
          password: "123",
          role: "client", // change between admin and client for testing
        };
        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          console.log("options: invalid credentials");
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/SignForm",
    signOut: "/auth/signout",
    newUser: "/Client/ProfileForm",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
