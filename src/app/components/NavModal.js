"use client";

import Link from "next/link";
export default function NavModal({ isModalOpenHandler }) {
  return (
    <>
      <nav
        className={
          "absolute left-0 top-24 z-50 flex h-[600px] w-full flex-col items-center space-y-[32px] bg-gradient-180 font-fraunces text-[24px] font-bold text-very-dark-blue "
        }
      >
        <Link onClick={isModalOpenHandler} className={"pt-[40px]"} href={"/"}>
          <span>Home</span>
        </Link>
        <Link onClick={isModalOpenHandler} href={"/about"}>
          <span>About</span>
        </Link>
        <Link onClick={isModalOpenHandler} href={"/plan"}>
          <span>Create Your Plan</span>
        </Link>
      </nav>
    </>
  );
}
