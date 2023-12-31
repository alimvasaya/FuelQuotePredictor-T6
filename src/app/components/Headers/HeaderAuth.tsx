'use client';
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'next-auth/react';

type Props = {};

export default function HeaderAuth({}: Props) {
  // Animation: load header on initial render
  const homeRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);

  function onLoadHeader() {
    if (accountRef.current == null || homeRef.current == null) return;
    accountRef.current.style.marginRight = '0px';
    homeRef.current.style.marginLeft = '0px';
    accountRef.current.style.opacity = '1';
    homeRef.current.style.opacity = '1';
  }

  useEffect(() => {
    onLoadHeader();
  }, []);

  return (
    <header
      className="sticky top-0 z-50 mx-auto flex max-w-7xl items-center justify-between p-5 
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
        className="-mr-[100px] flex cursor-pointer flex-row space-x-4 opacity-0 transition-all
        duration-700"
      >
        <Link to="/requestQuote">
          <button className="butoon">Request Quote</button>
        </Link>
        <Link to="/quoteHistory">
          <button className="butoon">Quote History</button>
        </Link>
        <Link to="/viewProfile">
          <button className="butoon">Profile</button>
        </Link>
        <button
          className="butoon"
          onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
        >
          Sign Out
        </button>
      </div>
    </header>
  );
}
