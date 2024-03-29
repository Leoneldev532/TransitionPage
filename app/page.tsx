"use client";

import gsap from "gsap";
import { useEffect } from "react";
import Transition from "./transition";

export default function Home() {
  const tl = gsap.timeline();
  useEffect(() => {
    // tl.fromTo(".page", { opacity: 0 }, { opacity: 1, duration: 1 });
  });
  return (
    <main className=" relative  text-white page overflow-hidden leading-normal bg-black-400 flex min-h-screen flex-col items-center justify-center w-full">
      <Transition timeline={tl} />
    </main>
  );
}
