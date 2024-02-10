"use client";

import gsap from "gsap";
import { useEffect } from "react";
import Transition from "../transition";

export default function Home() {
  const tl = gsap.timeline();
  useEffect(() => {
    tl.from(".txt1", {
      duration: 0.8,
      skew: 30,
      transformOrigin: "50% 50%",
      y: 160,
      ease: "sine",
    }).to(".circle", {
      scale: 7.8,
    });
  });

  return (
    <main className=" relative  text-white page overflow-hidden leading-normal bg-black-400 flex min-h-screen flex-col items-center justify-center w-full">
      <Transition timeline={tl} />
      <div className="circle h-10 w-10 rounded-full "></div>
      <div className="h-36 overflow-hidden z-0">
        <h2 className="text-9xl  txt1  ">About</h2>
      </div>
    </main>
  );
}
