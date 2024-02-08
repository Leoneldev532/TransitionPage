// @ts-nocheck
"use client";
import im1 from "@/public/1.jpg";
import im2 from "@/public/2.jpg";
import im3 from "@/public/next.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  const [statetxt, setStatetxt] = useState({
    isActive1txt: true,
    isActive2txt: false,
    isActive3txt: false,
  });

  const imageBloc = useRef(null);

  const tl = gsap.timeline();

  const showMarqueeTxt = (index: number) => {
    tl.to(
      `.m${index}`,
      {
        y: 0,
        opacity: 0.7,
        ease: "sine.inOut",
        duration: 0.4,
      },
      "<"
    );
  };

  const hideMarqueeTxt = (index: number) => {
    tl.to(
      `.m${index}`,
      {
        opacity: 0,
        y: 100,
        ease: "sine.inOut",
        duration: 0,
      },
      "<"
    );
  };

  const AnimTextShow = (index: number) => {
    tl.to(
      `.txt${index}`,
      {
        opacity: 1,
        duration: 0.2,
      },
      "<"
    )
      .from(
        `.title${index}`,
        {
          y: 70,
          skewY: 2,
          ease: "sine.inOut",
        },
        "<"
      )
      .from(
        ".word",
        {
          y: 100,
          color: "red",
          duration: 1,
        },
        "<"
      );
  };

  const AnimTextHide = (index: number) => {
    tl.to(
      `.txt${index}`,
      {
        opacity: 0,
        duration: 0.2,
      },
      "<"
    )
      .from(
        `.title${index}`,
        {
          y: 70,
          skewY: 2,
          ease: "sine.inOut",
        },
        "<"
      )
      .from(
        ".word",
        {
          y: 100,
          color: "red",
          duration: 1,
        },
        "<"
      );
  };

  const slideNext = (index: number) => {
    if (index === 0) {
      tl.to(
        imageBloc?.current?.children[0],
        {
          x: "-100%",
          ease: "power3.inOut",
          duration: 0.8,
        },
        "<"
      );
      tl.to(
        imageBloc?.current?.children[1],
        {
          x: "-100%",
          ease: "power3.inOut",
          duration: 0.8,
        },
        "<"
      );
      tl.to(
        imageBloc?.current?.children[2],
        {
          x: "-100%",
          ease: "power3.inOut",
          duration: 0.8,
        },
        "<"
      );
      AnimTextShow(2);
      AnimTextHide(1);
      AnimTextHide(3);

      showMarqueeTxt(2);
      hideMarqueeTxt(1);
      hideMarqueeTxt(3);
    }

    if (index === 1) {
      tl.to(
        imageBloc?.current?.children[0],
        {
          x: "-200%",
          ease: "power3.inOut",
          duration: 0.8,
        },
        "<"
      );
      tl.to(
        imageBloc?.current?.children[1],
        {
          x: "-200%",
          ease: "power3.inOut",
          duration: 0.8,
        },
        "<"
      );
      tl.to(
        imageBloc?.current?.children[2],
        {
          x: "-200%",
          ease: "power3.inOut",
          duration: 0.8,
        },
        "<"
      );
      AnimTextShow(3);
      AnimTextHide(2);
      AnimTextHide(1);

      showMarqueeTxt(3);
      hideMarqueeTxt(2);
      hideMarqueeTxt(1);
    }

    if (index === 2) {
      console.log("====================================");
      console.log(2, "n");
      console.log("====================================");
      tl.to(
        imageBloc?.current?.children[0],
        {
          x: "-300%",
          ease: "power3.inOut",
          duration: 0.8,
        },
        "<"
      );
      tl.to(
        imageBloc?.current?.children[1],
        {
          x: "-300%",
          ease: "power3.inOut",
          duration: 0.8,
        },
        "<"
      );
      tl.to(
        imageBloc?.current?.children[2],
        {
          x: "-300%",
          ease: "power3.inOut",
          duration: 0.8,
        },
        "<"
      );
      AnimTextShow(1);
      AnimTextHide(2);
      AnimTextHide(3);

      showMarqueeTxt(1);
      hideMarqueeTxt(2);
      hideMarqueeTxt(3);
    }
  };

  const prevSlides = (index: number) => {
    if (index === 1) {
      tl.to(
        imageBloc?.current?.children[0],
        {
          x: "0%",
          ease: "power3.inOut",
          duration: 0.8,
        },
        "<"
      );
      tl.to(
        imageBloc?.current?.children[1],
        {
          x: "0%",

          ease: "power3.inOut",
          duration: 0.8,
        },
        "<"
      );
      tl.to(
        imageBloc?.current?.children[2],
        {
          x: "0%",
          ease: "power3.inOut",
          duration: 0.8,
        },
        "<"
      );
      AnimTextShow(1);
      AnimTextHide(2);
      AnimTextHide(3);

      showMarqueeTxt(1);
      hideMarqueeTxt(2);
      hideMarqueeTxt(3);
    }

    if (index === 0) {
      tl.to(
        imageBloc?.current?.children[0],
        {
          x: "-200%",

          ease: "power3.inOut",
          duration: 0.8,
        },
        "<"
      );
      tl.to(
        imageBloc?.current?.children[1],
        {
          x: "-200%",

          ease: "power3.inOut",
          duration: 0.8,
        },
        "<"
      );
      tl.to(
        imageBloc?.current?.children[2],
        {
          x: "-200%",

          ease: "power3.inOut",
          duration: 0.8,
        },
        "<"
      );
      AnimTextShow(3);
      AnimTextHide(2);
      AnimTextHide(1);

      showMarqueeTxt(3);
      hideMarqueeTxt(2);
      hideMarqueeTxt(1);
    }

    if (index === 2) {
      tl.to(
        imageBloc?.current?.children[0],
        {
          x: "-100%",
          ease: "power3.inOut",
          duration: 0.8,
        },
        "<"
      );
      tl.to(
        imageBloc?.current?.children[1],
        {
          x: "-100%",
          ease: "power3.inOut",
          duration: 0.8,
        },
        "<"
      );
      tl.to(
        imageBloc?.current?.children[2],
        {
          x: "-100%",
          ease: "power3.inOut",
          duration: 0.8,
        },
        "<"
      );
      AnimTextShow(2);
      AnimTextHide(1);
      AnimTextHide(3);

      showMarqueeTxt(2);
      hideMarqueeTxt(1);
      hideMarqueeTxt(3);
    }

    // }
  };

  useEffect(() => {});
  const nextSlide = () => {
    if (imageBloc?.current?.children[0].classList.contains("active")) {
      slideNext(0);
      setState({ isActive1: false, isActive2: true, isActive3: false });
      setStatetxt({
        isActive1txt: false,
        isActive2txt: true,
        isActive3txt: false,
      });
    }
    if (imageBloc?.current?.children[1].classList.contains("active")) {
      slideNext(1);
      setState({ isActive1: false, isActive2: false, isActive3: true });
      setStatetxt({
        isActive1txt: false,
        isActive2txt: false,
        isActive3txt: true,
      });
    }
    if (imageBloc?.current?.children[2].classList.contains("active")) {
      slideNext(2);
      setState({ isActive1: true, isActive2: false, isActive3: false });
      setStatetxt({
        isActive1txt: true,
        isActive2txt: false,
        isActive3txt: false,
      });
    }
  };

  const prevSlide = () => {
    if (imageBloc?.current?.children[0].classList.contains("active")) {
      prevSlides(0);
      setState({ isActive1: false, isActive2: false, isActive3: true });
      setStatetxt({
        isActive1txt: false,
        isActive2txt: false,
        isActive3txt: true,
      });
    }
    if (imageBloc?.current?.children[1].classList.contains("active")) {
      prevSlides(1);
      setState({ isActive1: true, isActive2: false, isActive3: false });
      setStatetxt({
        isActive1txt: true,
        isActive2txt: false,
        isActive3txt: false,
      });
    }
    if (imageBloc?.current?.children[2].classList.contains("active")) {
      prevSlides(2);
      setState({ isActive1: false, isActive2: true, isActive3: false });
      setStatetxt({
        isActive1txt: false,
        isActive2txt: true,
        isActive3txt: false,
      });
    }
  };

  return (
    <main className=" relative text-white page  leading-normal bg-black-400 flex min-h-screen flex-col items-center justify-start w-full">
      <h2 className="text-8xl py-8 text-gray-800 font-extrabold">
        Voyagez Avec Assurance
      </h2>
      <div className="w-full bg-blue-400  flex flex-col  relative">
        <div className="h-auto flex z-0 pt-36  justify-start absolute w-full ">
          <div className=" flex  w-full  overflow-hidden ">
            <div className="numberanim whitespace-nowrap left-[80%]   relative flex gap-x-3    w-full h-36">
              <h2
                className={` text-transparent  text-9xl m1   translate-y-[0px]  opacity-2 text-transparent0 ${
                  statetxt.isActive1txt ? "active " : null
                } absolute`}
              >
                2077 2004 E525 E023 E820 2023 6520 023 6520 077 2004 E525 E023
                E820 2023 6520 023 6520 2077 2004 E525 E023 E820 2023 6520 023
                6520 077 2004 E525 E023 E820 2023 6520 023 6520
              </h2>
              <h2
                className={`  text-transparent  text-9xl m2 translate-y-[100px] opacity-0 ${
                  statetxt.isActive2txt ? "active " : null
                } absolute`}
              >
                {" "}
                2077 2004 E525 E023 E820 2023 6520 2077 2004 E525 E023 E820 2023
                6520 2077 2004 E525 E023 E820 2023 6520 2077 2004 E525 E023 E820
                2023 6520
              </h2>
              <h2
                className={`  text-transparent   text-9xl  m3 translate-y-[100px] opacity-0 ${
                  statetxt.isActive3txt ? "active " : null
                } absolute`}
              >
                O024 PL25 2O23 K520 P024 4L25 P024 4L25 2O23 K520 P024 4L25 P024
                4L25 2O23 K520 P024 4L25 P024 4L25 2O23 K520 P024 4L25
              </h2>
            </div>
          </div>
        </div>

        <div className="h-36 flex flex-col z-50 px-36 justify-start absolute w-full ">
          <div className="w-full flex justify-end items-start">
            <div
              ref={imageBloc}
              className="w-[640px] bg-red-800 h-[640px] flex relative rounded-xl overflow-hidden"
            >
              <div
                className={`bg-blue-400 ${
                  state.isActive1 ? "active" : null
                }    min-w-[640px] h-[640px] `}
              >
                <Image
                  src={im1}
                  alt="hello"
                  className="object-cover  w-[640px] h-[640px]"
                />
              </div>

              <div
                className={` ${
                  state.isActive2 ? "active" : null
                }  min-w-[640px]   h-[640px] `}
              >
                <Image
                  src={im2}
                  alt="hello"
                  className="w-full h-full object-cover"
                  height={640}
                  width={640}
                />
              </div>

              <div
                className={` ${
                  state.isActive3 ? "active" : null
                }   min-w-[640px] h-[640px] `}
              >
                <Image
                  src={im3}
                  alt="hello"
                  className="w-full h-full object-cover"
                  height={640}
                  width={640}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 relative -top-72 ">
            <div className=" w-full flex  relative">
              <div
                className={` ${
                  statetxt.isActive1txt ? "active" : null
                } txt1 w-full opacity-1 flex flex-col gap-y-8 absolute`}
              >
                <div className="text-4xl  h-12 overflow-hidden font-bold">
                  <h2 className="title1">Travel Around the World</h2>
                </div>
                <p className="w-1/2 description transition-all ease duration-400 pr-40 text-2xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit 55.
                  Fugiat porro nobis magnam earum dolorum beatae, accusamus
                  magni voluptates sapiente quam ratione quae similique dolorem
                  aut vel culpa corporis maiores voluptatibus.
                </p>
              </div>

              <div
                className={` ${
                  statetxt.isActive2txt ? "active" : null
                } txt2 w-full opacity-0 flex flex-col gap-y-8   absolute`}
              >
                <div className="text-4xl   h-12 overflow-hidden font-bold">
                  <h2 className="title2">Read The best Book during Travel</h2>
                </div>
                <p className="w-1/2 description transition-all ease duration-400  pr-40 text-2xl">
                  t is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                </p>
              </div>

              <div
                className={` ${
                  statetxt.isActive3txt ? "active" : null
                } txt3 w-full opacity-0 flex flex-col gap-y-8  absolute`}
              >
                <div className="text-4xl    h-12 overflow-hidden font-bold">
                  <h2 className="title3"> Make the News Discovers</h2>
                </div>
                <p className="w-1/2 description  transition-all ease duration-400 pr-40 text-2xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                </p>
              </div>
            </div>

            <div className="flex mt-56 justify-start h-16 gap-x-2 w-full">
              {/* {!state.isActive1 ? ( */}
              <span
                className="flex justify-start   "
                onClick={() => prevSlide()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 60 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-36 opacity-70 hover:opacity-100 transition-all ease duration-500 cursor-pointer  text-left "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  />
                </svg>
              </span>
              {/* ) : null} */}
              {!state.isActive3 ? (
                <span
                  className="flex justify-start   "
                  onClick={() => nextSlide()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-36 opacity-70 hover:opacity-100 transition-all ease duration-500 cursor-pointer  text-left "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
