"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  useEffect(() => {}, []);
  return (
    <div>
      {" "}
      {/* <div className="min-h-screen">
        <h2 className="text-9xl  text-white">OPPFDDLG</h2>
      </div> */}
      <main className=" relative bg-black flex min-h-screen flex-col items-center justify-center w-full">
        <div className="overflow-hidden  bg-black   flex justify-center flex-col items-center w-full  ">
          <video
            autoPlay
            playsInline
            muted
            loop
            preload=""
            poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
          >
            <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
            <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" />
          </video>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 285 80"
            preserveAspectRatio="xMidYMid slice"
            height="100%"
            width="100%"
          >
            <defs>
              <mask id="mask" x="0" y="0" height="100%" width="100%">
                <rect x="0" y="0" height="100%" width="100%"></rect>
                <text x="50%" y="50%" text-anchor="middle">
                  LINKEDIN
                </text>
              </mask>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" />
          </svg>
        </div>
      </main>
    </div>
  );
}
