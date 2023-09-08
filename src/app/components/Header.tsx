"use client";
import React, { useRef, useEffect } from "react";

type Props = {}

export default function Header({}: Props) {
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
    <header className="item-start text-md sticky top-0 z-50 mx-auto flex max-w-6xl justify-between p-5 xl:items-center">
      <div
        ref={homeRef} 
        className="-ml-[100px] flex flex-row items-center space-x-2 opacity-0 transition-all duration-1000">
        <div>Fuel Quote Predictor</div>
      </div>

      <div
        ref={accountRef}
        className="-mr-[100px] flex cursor-pointer flex-row items-center space-x-2 opacity-0 
        transition-all duration-1000"
      >
        <div>Account</div>
        <div>History</div>  
      </div>
    </header>
  )
}