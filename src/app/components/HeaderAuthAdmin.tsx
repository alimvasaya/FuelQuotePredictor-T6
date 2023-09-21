// pages/Client/HeaderLogin.tsx
// Header layout after authentication

"use client";
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

export default function HeaderLogin({}: Props) {
  // onLoad Animation
  const homeRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);

  function onLoadHeader() {
    if (accountRef.current == null || homeRef.current == null) return;
    accountRef.current.style.marginRight = "0px";
    homeRef.current.style.marginLeft = "0px";
    accountRef.current.style.opacity = "1";
    homeRef.current.style.opacity = "1";
  }

  useEffect(() => {
    onLoadHeader();
  }, []);

  return (
    <header
      id="headerAuth"
      className="sticky top-0 z-50 mx-auto flex max-w-6xl items-center justify-between p-5 
      tracking-widest"
    >
      <div
        ref={homeRef}
        className="-ml-[100px] hidden space-x-4 text-lg font-semibold uppercase text-white opacity-0
        transition-all duration-700 md:inline-flex lg:text-2xl"
      >
        <p>FUEL QUOTE Group 6.</p>
      </div>

      {/* Header Buttons */}

      <div
        ref={accountRef}
        className="-mr-[100px] flex cursor-pointer flex-row space-x-4 opacity-0 
        transition-all duration-700"
      >
        <Link to="/form">
          <button className="butoon">Request Quote</button>
        </Link>
        <Link to="/quote-history">
          <button className="butoon">Quote Histories</button>
        </Link>
        <Link to="/client-profiles">
          <button className="butoon">Client Profiles</button>
        </Link>
        <Link to="/analytics">
          <button className="butoon">Analytics</button>
        </Link>
        <Link to="/Check_support_Tickets">
          <button className="butoon">Support Tickets</button>
        </Link>
        <button className="butoon">Log Out</button>
      </div>
    </header>
  );
}
