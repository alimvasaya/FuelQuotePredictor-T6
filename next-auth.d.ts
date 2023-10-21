import { DefaultSession, DefaultUser } from 'next-auth';
import { JWT, DefaultJWt } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string | any;
      email: string | null | undefined;
      role: string;
      dataCompleted: boolean;
    } & DefaultSession;
  }

  interface User extends DefaultUser {
    role: string;
    dataCompleted: boolean;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWt {
    role: string;
    dataCompleted: boolean;
  }
}
