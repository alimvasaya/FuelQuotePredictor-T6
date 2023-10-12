"use client";
import React, { useRef, useEffect } from "react";
import LogInForm from "./LogInForm";
import RegisterForm from "./RegisterForm";

type Props = {};
const localHost = "http://localhost:8000";

export default function SignForm({}: Props) {
  // Animations: load signIn or signUp form on initial render
  const formRef = useRef<HTMLElement>(null);
  const signinRef = useRef<HTMLDivElement>(null);
  const signupRef = useRef<HTMLDivElement>(null);

  function onLoadForm() {
    if (formRef.current == null) return;
    formRef.current.style.opacity = "1";
  }

  useEffect(() => {
    onLoadForm();
  }, []);

  // Animations: transition between SignIn and SignUp Forms
  function clickSignInAnim() {
    if (signinRef.current == null || signupRef.current == null) return;
    signinRef.current.style.marginLeft = "0px";
    signupRef.current.style.marginRight = "-700px";
    signinRef.current.style.opacity = "1";
    signupRef.current.style.opacity = "0";
  }

  function clickSignUpAnim() {
    if (signinRef.current == null || signupRef.current == null) return;
    signinRef.current.style.marginLeft = "-700px";
    signupRef.current.style.marginRight = "0px";
    signinRef.current.style.opacity = "0";
    signupRef.current.style.opacity = "1";
  }

  return (
    <section
      ref={formRef}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10
      text-center opacity-0 transition-opacity duration-500"
    >
      {/* Sign In Form */}
      <div
        ref={signinRef}
        className="opacity-1 absolute top-24 z-10 -ml-[0px] transition-all duration-700 ease-in-out"
      >
        <LogInForm clickRegisterAnim={clickSignUpAnim} />
      </div>

      {/* Sign Up Form */}
      <div
        ref={signupRef}
        className="absolute top-24 -mr-[400px] opacity-0 transition-all duration-700 ease-in-out"
      >
        <RegisterForm localHost={localHost} clickLogInAnim={clickSignInAnim} />
      </div>
    </section>
  );
}
