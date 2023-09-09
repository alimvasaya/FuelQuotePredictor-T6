"use client";
import React, { useRef, useEffect, HTMLAttributes } from "react";

type Props = {};

export default function Hero({}: Props) {
  const heroRef = useRef<HTMLElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);
  const signupRef = useRef<HTMLDivElement>(null);

  function onLoadForm() {
    if (heroRef.current == null) return;
    heroRef.current.style.opacity = "1";
  }

  useEffect(() => {
    onLoadForm();
  }, []);

  function clickLogin() {
    if (loginRef.current == null || signupRef.current == null) return;
    loginRef.current.style.marginLeft = "0px";
    signupRef.current.style.marginRight = "-700px";
    loginRef.current.style.opacity = "1";
    signupRef.current.style.opacity = "0";
  }

  function clickSignup() {
    if (loginRef.current == null || signupRef.current == null) return;
    loginRef.current.style.marginLeft = "-700px";
    signupRef.current.style.marginRight = "0px";
    loginRef.current.style.opacity = "0";
    signupRef.current.style.opacity = "1";
  }

  return (
    <section
      ref={heroRef}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10
      text-center opacity-0 transition-opacity duration-500"
    >
      {/* Log In */}
      <div
        ref={loginRef}
        className="opacity-1 absolute top-24 z-10 -ml-[0px] flex flex-col transition-all duration-700
        ease-in-out"
      >
        <h1 className="text-2xl font-semibold text-white">LOG IN</h1>

        <form className="mx-auto mt-10 flex w-fit flex-col space-y-2">
          <div>
            <input type="email" placeholder="Email" className="input-field" />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="input-field"
            />
          </div>

          <button
            className="rounded-full border-indigo-500/50 bg-indigo-500/50 px-6 py-2 text-sm
            uppercase tracking-widest text-white transition-colors hover:border-indigo-500
            hover:bg-indigo-500"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4">
          <span className="font-light text-white">
            <a href="#" className="italic hover:underline">
              Forgot password?
            </a>
          </span>
        </div>
        <div className="mt-2">
          <span className="font-light text-white">
            Don't have an account?{" "}
            <a
              href="#"
              onClick={clickSignup}
              className="font-semibold hover:underline"
            >
              Sign Up
            </a>
          </span>
        </div>
      </div>

      {/* Sign Up */}
      <div
        ref={signupRef}
        className="absolute top-24 z-0 -mr-[400px] flex flex-col opacity-0 transition-all duration-700
        ease-in-out"
      >
        <h1 className="text-2xl font-semibold text-white">SIGN UP</h1>

        <form className="mx-auto mt-10 flex w-fit flex-col space-y-2">
          <div>
            <input
              type="text"
              placeholder="Full name"
              className="input-field"
            />
          </div>
          <div>
            <input type="email" placeholder="Email" className="input-field" />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="input-field"
            />
          </div>

          <button
            className="rounded-full border-indigo-500/50 bg-indigo-500/50 px-6 py-2 text-sm
            uppercase tracking-widest text-white transition-colors hover:border-indigo-500
          hover:bg-indigo-500"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4">
          <span className="font-light text-white">
            Already have an account?{" "}
            <a
              href="#"
              onClick={clickLogin}
              className="font-semibold hover:underline"
            >
              Log In
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
