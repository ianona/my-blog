import Image from "next/image";
import xtwitter from "@/public/xtwitter.png";
import li from "@/public/linkedin.png";
import gh from "@/public/github.png";
import styled, { keyframes } from "styled-components";
import { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";
import Link from "next/link";
import { useIsVisible } from "../hooks/useIsVisible";
import { nav } from "./Header";
import { usePathname } from "next/navigation";
import { GithubIcon, LucideLinkedin, LucideTwitter } from "lucide-react";
// Define keyframes animation
const rotateAnimation = keyframes`
  0% {
    transform:rotate(0deg);
  }
  100% {
    transform:rotate(360deg);
  }
`;

// Styled component with keyframes animation
const AnimatedP = styled.p`
  animation: ${rotateAnimation} 8s linear infinite; // Apply keyframes animation
  height: 300px;
  width: 300px;
  position: relative;
  border-radius: 50%;
  left: calc(50% - 150px);
`;

const links = [
  {
    name: "ian-ona",
    img: LucideLinkedin,
    url: "https://www.linkedin.com/in/ian-ona",
  },
  {
    name: "ianona",
    img: GithubIcon,
    url: "https://github.com/ianona",
  },
  {
    name: "ianona09",
    img: LucideTwitter,
    url: "https://x.com/ianona09?s=21",
  },
];

export default function Hero() {
  const [progress, setProgress] = useState(1);
  const slide = progress < 100 ? 1 : progress < 200 ? 2 : 3;
  const onSlideOne = slide === 1;
  const onSlideTwo = slide === 2;
  const onSlideThree = slide === 3;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((p) => (p >= 300 ? 1 : p + 1));
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const pathName = usePathname();
  const ref = useRef<HTMLElement | null>(null);
  const isVisible = useIsVisible(ref);
  return (
    <main className="h-screen pt-[25vh] flex flex-col w-[100vw]">
      <div className="px-[5vw]">
        <div className="flex flex-row items-center gap-8">
          {/* Name and nav */}
          <div className="flex flex-col">
            {/* name */}
            <div className="text-4xl md:text-6xl">
              <Link href="/">
                <h1 className="font-bold">
                  <span className="hover:cursor-pointer">
                    ian <span className="text-primary">ona</span>
                  </span>
                </h1>
              </Link>
              <h1 className="md:mt-3 font-extralight">fullstack developer</h1>
            </div>
            {/* nav */}
            <nav
              ref={ref}
              className="flex gap-4 md:gap-8 w-full mt-2 md:mt-4 md:text-xl lowercase h-9 italic"
            >
              {nav.map((navItem, i) => (
                <Link href={navItem.path} key={i}>
                  <span
                    className={`transition-all ease-in hover:border-b-4 border-primary font-light hover:font-normal ${
                      pathName.startsWith(navItem.path) &&
                      "font-normal border-primary border-b-4"
                    }`}
                  >
                    {navItem.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="pt-2 flex flex-col gap-2 lg:gap-2 overflow-visible w-8/12 lg:w-6/12">
          {links.map((link) => (
            <a
              key={link.name}
              target="_blank"
              href={link.url}
              rel="noopener noreferrer"
              className="hover:-translate-y-1 transition-transform ease-in hover:cursor-pointer flex flex-row gap-2 "
            >
              <link.img />
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <nav
        className={`${
          isVisible ? "-translate-y-20" : "translate-y-0 top-0"
        } z-30 flex justify-center gap-8 w-full text-xl uppercase py-2 bg-primary fixed top-0 transition-transform duration-500`}
      >
        {nav.map((navItem, i) => (
          <Link href={navItem.path} key={i}>
            <span
              className={`transition-all ease-in hover:border-b-4 border-white font-light hover:font-normal text-white ${
                pathName.startsWith(navItem.path) &&
                "font-normal border-primary border-b-4"
              }`}
            >
              {navItem.name}
            </span>
          </Link>
        ))}
      </nav>
    </main>
  );
}
