'use client';
import React, { useRef, FormEventHandler } from 'react';
import toast from 'react-hot-toast/headless';
import SignInputField from './SignInputField';

type SignInProps = {
  localHost: string;
  clickLogInAnim: () => void;
};

export default function RegisterForm({
  localHost,
  clickLogInAnim,
}: SignInProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  // Handle Register Submission
  const handleSignUpSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (emailRef.current == null || passRef.current == null) {
      toast.error('Invalid credentials');
      return;
    }

    const res = await fetch(`${localHost}/api/signUp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passRef.current.value,
      }),
    })
      .then(() => {
        toast.success('Successfully registered');
        return clickLogInAnim();
      })
      .catch(() => toast.error('Registration failed'));
  };

  return (
    <section>
      <h1 className="text-2xl font-semibold text-white">SIGN UP</h1>

      <form
        onSubmit={handleSignUpSubmit}
        className="mx-auto mt-10 flex w-fit flex-col space-y-2"
      >
        <SignInputField emailRef={emailRef} passRef={passRef} />
      </form>

      <div className="mt-4">
        <span className="font-light text-white">
          Already have an account?{' '}
          <a
            href="#"
            onClick={clickLogInAnim}
            className="font-semibold hover:underline"
          >
            Log In
          </a>
        </span>
      </div>
    </section>
  );
}
