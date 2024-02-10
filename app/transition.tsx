import { useEffect } from "react";

const Transition = ({ timeline }: any) => {
  useEffect(() => {
    timeline
      .to(".transit", {
        duration: 0.6,
        width: "100%",
        ease: "expo.easeInOut",
      })
      .to(".transit", {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
      });
  });
  return (
    <div className="absolute z-[999] transit  left-0 top-0 bg-red-400 flex justify-center items-center h-[100vh] w-0">
      <h2 className="text-4xl">Transition</h2>
    </div>
  );
};

export default Transition;
