"use client";
import React, { useRef } from "react";
import { Session } from "next-auth";

import ViewProfile from "./ViewProfile";
import EditProfile from "./EditProfile";

type DataProps = {
  data: Session;
};

export default function Profile({ data }: DataProps) {
  const viewRef = useRef<HTMLDivElement>(null);
  const editRef = useRef<HTMLDivElement>(null);

  // Animations: transition between viewProfile and EditProfile
  function clickViewAnim() {
    if (viewRef.current == null || editRef.current == null) return;
    viewRef.current.style.marginLeft = "0px";
    editRef.current.style.marginRight = "-700px";
    viewRef.current.style.opacity = "1";
    editRef.current.style.opacity = "0";
  }

  function clickEditAnim() {
    if (viewRef.current == null || editRef.current == null) return;
    viewRef.current.style.marginLeft = "-700px";
    editRef.current.style.marginRight = "0px";
    viewRef.current.style.opacity = "0";
    editRef.current.style.opacity = "1";
  }

  return (
    <section className="flex flex-col items-center justify-center pt-12">
      {/* View Profile */}
      <div
        ref={viewRef}
        className="opacity-1 absolute top-20 z-10 -ml-[0px] transition-all duration-700 ease-in-out"
      >
        <ViewProfile data={data} clickEditAnim={clickEditAnim} />
      </div>

      {/* Edit Profile */}
      <div
        ref={editRef}
        className="absolute top-20 -mr-[400px] opacity-0 transition-all duration-700 ease-in-out"
      >
        <EditProfile data={data} clickViewAnim={clickViewAnim} />
      </div>
    </section>
  );
}
