import Image from "next/image";
import heroPic from "@/public/heropicnew.jpg";
import xtwitter from "@/public/xtwitter.png";
import li from "@/public/linkedin.png";
import gh from "@/public/github.png";
import styled, { keyframes } from "styled-components";
import { useRef } from "react";

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
  /* background-color: aliceblue; */
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
  const ref = useRef<HTMLParagraphElement | null>(null);
  console.log(ref.current?.getBoundingClientRect().x);
  return (
    <main className="h-[80vh] pt-2">
      <div
        className={`w-[220px] z-10 absolute translate-x-[calc(50vw-110px)] translate-y-[40px]`}
      >
        <Image src={heroPic} alt="Ian Ona" className="rounded-full" />
      </div>
      <AnimatedP ref={ref} id="rotate">
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
      {/* <div className="flex flex-col md:flex-row md:gap-4 w-10/12 md:w-12/12 mx-auto content-center items-center">
        <div className="w-12/12 md:w-8/12">
          <h1 className="text-5xl font-semibold">Hello, I&#39;m Ian</h1>
          <p className="mt-4 text-xl font-light">
            I’m a full-stack web developer currently based in Taipei. I love to
            create and share what I learn, so I thought I’d do a bit of both
            here.
            <br />
            <span className="font-semibold">Let’s connect!</span>
          </p>
          <div className="flex flex-row gap-1 lg:gap-2 mt-4 w-6/12 lg:w-4/12 overflow-visible">
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
        <div className="w-6/12 mt-8 md:mt-0 md:w-4/12 md:mt-none">
          <Image src={heroPic} alt="Ian Ona" className="rounded-full" />
        </div>
      </div> */}
    </main>
  );
}
