import Image from "next/image";
import heroPic from "@/public/heropicnew.jpg";
import xtwitter from "@/public/xtwitter.png";
import li from "@/public/linkedin.png";
import gh from "@/public/github.png";
import styled, { keyframes } from "styled-components";
import { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";

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
    name: "LinkedIn",
    img: li,
    url: "https://www.linkedin.com/in/ian-ona",
  },
  {
    name: "GitHub",
    img: gh,
    url: "https://github.com/ianona",
  },
  {
    name: "Twitter",
    img: xtwitter,
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
  return (
    <main className="h-[80vh] md:mt-14">
      <div>
        <div
          className={`w-[220px] z-10 absolute translate-x-[calc(50vw-110px)] translate-y-[40px]`}
        >
          <Image src={heroPic} alt="Ian Ona" className="rounded-full" />
        </div>
        <AnimatedP id="rotate">
          {Array.from("Hello, I'm  Ian").map((char, i) => (
            <span
              key={i}
              className="font-semibold text-4xl"
              style={{
                transform: `rotate(${12 * i}deg)`,
                position: "absolute",
                transformOrigin: "0 150px",
                transformStyle: "flat",
                left: "50%",
                // textTransform: "capitalize",
              }}
            >
              {char}
            </span>
          ))}
        </AnimatedP>
      </div>
      <div className="w-10/12 md:w-3/12 mx-auto flex flex-row gap-2 mt-4">
        <ProgressBar progress={progress} />
        <ProgressBar progress={progress - 100} />
        <ProgressBar progress={progress - 200} />
      </div>
      <div className="w-10/12 md:w-4/12 mx-auto relative text-center">
        <p
          className={`${onSlideOne
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 -z-10"
            } absolute top-0 mt-2 md:mt-4 md:text-xl font-light transition-all duration-300 ease-in`}
        >
          I’m a full-stack web developer currently based in Taipei 🇹🇼 I love to
          create and share what I learn, so I thought I’d do a bit of both here
        </p>
        <p
          className={`${onSlideTwo
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 -z-10"
            } absolute top-0 mt-2 md:mt-4 md:text-xl font-light transition-all duration-300 ease-in`}
        >
          My experience has mostly been with startups in Taiwan and in the
          Philippines. I also do freelance work with friends for apps I find
          interesting.
        </p>
        <div
          className={`${onSlideThree
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 -z-10"
            } flex flex-col gap-2 items-center absolute top-0 transition-all duration-300 ease-in`}
        >
          <span className="font-semibold md:text-2xl">Let’s connect!</span>
          <div className="flex flex-row gap-1 lg:gap-2 overflow-visible w-8/12 lg:w-6/12">
            {links.map((link) => (
              <a
                key={link.name}
                target="_blank"
                href={link.url}
                rel="noopener noreferrer"
                className="hover:-translate-y-1 transition-transform ease-in hover:cursor-pointer"
              >
                <Image
                  className="rounded-full"
                  src={link.img}
                  alt={link.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
