'use client';
import React, { useRef, useEffect, FormEventHandler } from 'react';
import { signIn, useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import SignInputField from './SignInputField';

type SignInFormProps = {
  clickRegisterAnim: () => void;
};

export default function LogInForm({
  clickRegisterAnim: clickSignUpAnim,
}: SignInFormProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const session = useSession();

  useEffect(() => {
    if (
      window.location.href ===
        'http://localhost:3000/?error=Incorrect%20credentials' &&
      session.status === 'unauthenticated'
    ) {
      toast.error('Incorrect credentials');
    }
  }, []);

  // Handle SignIn Submission
  const handleLogInSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (emailRef.current == null || passRef.current == null) {
      toast.error('Invalid credentials');
      return;
    }

    const res = await signIn('credentials', {
      email: emailRef.current.value,
      password: passRef.current.value,
      redirect: true,
    }).then((res) => {
      if (res?.ok && !res.error) {
        if (session.data?.user.role === 'client') {
          res.url = 'http://localhost:3000/Client';
        } else if (session.data?.user.role === 'admin') {
          res.url = 'http://localhost:3000/Admin';
        }
      }
    });
  };

  return (
    <section>
      <h1 className="text-2xl font-semibold text-white">LOG IN</h1>

      <form
        onSubmit={handleLogInSubmit}
        className="mx-auto mt-10 flex w-fit flex-col space-y-2"
      >
        <SignInputField emailRef={emailRef} passRef={passRef} />
      </form>

      {/* <div className="mt-4">
        <span className="font-light text-white">
          <a href="#" className="italic hover:underline">
            Forgot password?
          </a>
        </span>
      </div> */}

      <div className="mt-2">
        <span className="font-light text-white">
          Don't have an account?{' '}
          <a
            href="#"
            onClick={clickSignUpAnim}
            className="font-semibold hover:underline"
          >
            Sign Up
          </a>
        </span>
      </div>
    </section>
  );
}
