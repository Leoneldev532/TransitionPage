"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-full fixed flex z-[300]  justify-center items-center ">
      <div className="z-30  bg-black   py-2 rounded-full my-3    px-2 w-[400px] ">
        <div className="text-white   gap-x-5 w-full flex justify-center items-center">
          <Link
            href="/About"
            className={`w-full text-center rounded-full  py-3 ${
              pathname === "/About" ? "bg-red-400" : null
            } `}
          >
            About
          </Link>
          <Link
            href="/Experience"
            className={`w-full text-center rounded-full  py-3 ${
              pathname === "/Experience" ? "bg-red-400" : null
            } `}
          >
            Experience
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
