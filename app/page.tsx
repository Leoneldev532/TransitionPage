// @ts-nocheck
"use client";

import gsap from "gsap";
import { useEffect, useState } from "react";

export default function Home() {
  const tl = gsap.timeline();
  const [state, setState] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handelemove = (e) => {
      setState({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handelemove);
  });

  const txt = gsap.utils.toArray(".txt1");

  const handle = () => {
    tl.to(
      ".bdg",
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
        duration: 0.3,
        ease: "sine",
      },
      "<"
    )
      .from(".h2high", {
        delay: 0.2,
        y: 100,
        skewY: 10,
        ease: "sine",
        transformOrigin: "50% 50%",
        opacity: 0,
      })
      .from(
        txt,
        {
          // delay: 0.6,
          y: 100,
          skewY: 10,
          ease: "sine",
          transformOrigin: "50% 50%",
          opacity: 0,
          stagger: {
            amount: 1,
          },
        },
        "-=0.3"
      );
  };

  return (
    <main className=" relative p-16 text-white page overflow-hidden leading-normal bg-black-400 flex min-h-screen flex-col items-center justify-center w-full">
      <div className="bdg scale-100 gap-y-8 transition-all ease duration-300 bg-gray-800 rounded-xl w-[30vw] h-[80vh] overflow-hidden relative ">
        <div className="flex-col  gap-y-3 p-10 flex">
          <div className="h-8 overflow-hidden pb-8">
            <h2 className="h2high text-3xl ">Ma liste de Passe temps</h2>
          </div>
          <div className="h-8 overflow-hidden">
            <span className="txt1 text-xl opacity-70"> patate </span>
          </div>
          <div className="h-8 overflow-hidden">
            <span className="txt1 text-xl  opacity-70"> igname </span>
          </div>
          <div className="h-8 overflow-hidden">git
            <span className="txt1 text-xl  opacity-70"> Riz </span>
          </div>
          <div className="h-8 overflow-hidden">
            <span className="txt1 text-xl opacity-70">carotte</span>
          </div>
          <div className="h-8 overflow-hidden">
            <span className="txt1 text-xl opacity-70">concombre</span>
          </div>
          <div className="h-8 overflow-hidden">
            <span className="txt1 text-xl opacity-70">poivron</span>
          </div>
          <div className="h-8 overflow-hidden">
            <span className="txt1 text-xl opacity-70">melon</span>
          </div>
          <div className="h-8 overflow-hidden">
            <span className="txt1 text-xl opacity-70">raifort</span>
          </div>
          <div className="h-8 overflow-hidden">
            <span className="txt1 text-xl opacity-70">oignon</span>
          </div>
          <div className="h-8 overflow-hidden">
            <span className="txt1 text-xl opacity-70">ail</span>
          </div>
          <div className="h-8 overflow-hidden">
            <span className="txt1 text-xl opacity-70">basilic</span>
          </div>
        </div>
      </div>
      <button
        onClick={(e) => handle()}
        className="px-4 py-3 bg-black text-white my-3 rounded-full"
      >
        {" "}
        Valider
      </button>
      <div
        className="h-4 w-4 rounded-full transform-none bg-red-400 pointer-events-none absolute "
        style={{ top: state.y - 8, left: state.x }}
      ></div>
    </main>
  );
}
