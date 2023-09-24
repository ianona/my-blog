"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from 'react';

const nav = [
  {
    path: "/resume",
    name: "Resume",
  },
  {
    path: "/blog",
    name: "Blog",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

export default function Header() {
  const pathName = usePathname();

  return (
    <React.Fragment>
      <header className="text-center">
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
        <nav className="flex justify-center gap-8 w-full mt-4 text-xl uppercase h-9">
          {nav.map((navItem, i) => (
            <Link href={navItem.path} key={i}>
              <span className={`transition-all ease-in hover:border-b-4 border-primary font-light hover:font-normal ${pathName.startsWith(navItem.path) && "font-normal border-primary border-b-4"}`}>
                {navItem.name}
              </span>
            </Link>
          ))}
        </nav>
      </header>
    </React.Fragment>

  );
}
