// Header prior to authentication

"use client";
import React, { useRef, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

export default function Header({}: Props) {
  // onLoad Animation
  const homeRef = useRef<HTMLDivElement>(null);
  // const accountRef = useRef<HTMLDivElement>(null);

  function onLoadHeader() {
    if (homeRef.current == null) return;
    // accountRef.current.style.marginRight = "0px";
    homeRef.current.style.marginLeft = "0px";
    // accountRef.current.style.opacity = "1";
    homeRef.current.style.opacity = "1";
  }

  useEffect(() => {
    onLoadHeader();
  }, []);

  return (
    <header
      id="header"
      className="item-start sticky top-0 z-50 mx-auto flex max-w-6xl items-center justify-between p-5
      text-sm tracking-widest md:text-base"
    >
      <div
        ref={homeRef}
        className="-ml-[100px] hidden space-x-4 text-lg font-semibold uppercase text-white opacity-0
        transition-all duration-700 md:inline-flex lg:text-2xl"
      >
        <p>FUEL QUOTE Group 6 .</p>
      </div>

      {/* Header Buttons */}
      {/* <div
        ref={accountRef}
        className="-mr-[100px] flex cursor-pointer flex-row items-center space-x-4 opacity-0 
        transition-all duration-700"
      >
        <button className="butoon">About</button>
        <button className="butoon">Contact Us</button>
      </div> */}
    </header>
  );
}
