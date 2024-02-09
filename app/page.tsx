// @ts-nocheck
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useState } from "react";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const [state, setState] = useState(false);
  const tl = gsap.timeline(); // Nouvelle instance de timeline
  const HandleCLick = () => {
    tl.to(".header", {
      x: "-100%",
      duration: 0.3,
    }).from(".txt1", {
      y: 100,
      skewY: 10,
      ease: "sine",
      duration: 0.6,
      transformOrigin: "50% 50% ",
      opacity: 0,
      autoAlpha: 0,
      stagger: {
        amount: 0.7,
      },
    });
    setState(true);
  };

  // const tl = gsap.timeline(); // Nouvelle instance de timeline
  const HandleCLickClose = () => {
    tl.to(".txt1", {
      y: 20,
      ease: "sine",
      duration: 0.7,
      transformOrigin: "50% 20% ",
      opacity: 0,
      autoAlpha: 0,
      stagger: {
        amount: 0.7,
      },
    })
      .to(
        ".header",
        {
          x: "0%",
          duration: 0.2,
        },
        "-=0.5"
      )
      .to(".txt1", {
        y: 0,
      })
      .to(".txt1", {
        opacity: 1,
        autoAlpha: 1,
      });
    setState(false);
  };
  return (
    <main className=" relative text-white page overflow-hidden leading-normal bg-black-400 flex min-h-screen flex-col items-center justify-center w-full">
      {!state ? (
        <div
          onClick={(e) => HandleCLick()}
          className="bg-black  rounded-full cursor-pointer p-4 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
      ) : (
        <div
          onClick={(e) => HandleCLickClose()}
          className="bg-black  rounded-full cursor-pointer p-4 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}
      <div className="absolute header gap-y-4 transform px-10 py-36 flex flex-col top-0 left-[100%] translate-x-[0%] w-[30rem] min-h-screen bg-black">
        <div className="h-16 overflow-hidden text-3xl lowercase">
          <h2 className="txt1 text-5xl opacity-70 cursor-pointer  w-full hover:opacity-100">
            Home
          </h2>
        </div>
        <div className="h-16 overflow-hidden ">
          <h2 className="txt1 text-5xl opacity-70 cursor-pointer w-full  lowercase">
            About
          </h2>
        </div>
        <div className="h-16 overflow-hidden">
          <h2 className="txt1 text-5xl opacity-70 cursor-pointer w-full  lowercase">
            work
          </h2>
        </div>
        <div className="h-16 overflow-hidden">
          <h2 className="txt1 text-5xl opacity-70 cursor-pointer w-full         lowercase">
            Experience
          </h2>
        </div>
        <div className="h-16 overflow-hidden">
          <h2 className="txt1 text-5xl opacity-70 cursor-pointer w-full  lowercase">
            Talks
          </h2>
        </div>
        <div className="h-16 overflow-hidden">
          <h2 className="txt1 text-5xl opacity-70 cursor-pointer w-full  lowercase">
            Contact
          </h2>
        </div>
      </div>
    </main>
  );
}
