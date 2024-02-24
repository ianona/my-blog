"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";
import { useIsVisible } from "../hooks/useIsVisible";

const nav = [
  {
    path: "/#resume",
    name: "Resume",
  },
  {
    path: "/#contact",
    name: "Contact",
  },
  {
    path: "/blog",
    name: "Blog",
  },
];

export default function Header() {
  const pathName = usePathname();
  const ref = useRef<HTMLElement | null>(null);
  const isVisible = useIsVisible(ref);
  return (
    <header className="text-center h-[20vh] relative">
      <div className="text-6xl">
        <Link href="/">
          <h1 className="font-bold">
            <span className="hover:cursor-pointer">
              Ian <span className="text-primary">Ona</span>
            </span>
          </h1>
        </Link>
        <h1 className="mt-3 font-extralight">Developer</h1>
      </div>
      <nav
        ref={ref}
        className="flex justify-center gap-8 w-full mt-4 text-xl uppercase h-9"
      >
        {nav.map((navItem, i) => (
          <Link href={navItem.path} key={i}>
            <span
              className={`transition-all ease-in hover:border-b-4 border-primary font-light hover:font-normal ${pathName.startsWith(navItem.path) &&
                "font-normal border-primary border-b-4"
                }`}
            >
              {navItem.name}
            </span>
          </Link>
        ))}
      </nav>
      <nav
        className={`${isVisible ? "-translate-y-20" : "translate-y-0 top-0"
          } z-30 flex justify-center gap-8 w-full text-xl uppercase py-2 bg-primary fixed top-0 transition-transform duration-500`}
      >
        {nav.map((navItem, i) => (
          <Link href={navItem.path} key={i}>
            <span
              className={`transition-all ease-in hover:border-b-4 border-white font-light hover:font-normal text-white ${pathName.startsWith(navItem.path) &&
                "font-normal border-primary border-b-4"
                }`}
            >
              {navItem.name}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
