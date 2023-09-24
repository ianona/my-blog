import Image from "next/image";
import heroPic from "@/public/heropicnew.jpg";
import xtwitter from "@/public/xtwitter.png";
import li from "@/public/linkedin.png";
import gh from "@/public/github.png";

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
  return (
    <main className="pt-20">
      <div className="flex flex-col md:flex-row md:gap-4 w-10/12 md:w-12/12 mx-auto content-center items-center">
        <div className="w-12/12 md:w-8/12">
          <h1 className="text-4xl font-semibold">Hello, I&#39;m Ian</h1>
          <p className="mt-4 text-xl font-light">
            I’m a full-stack web developer currently based in Taipei. I love to
            create and share what I learn, so I thought I’d do a bit of both
            here.
            <br />
            <span className="font-semibold">Let’s connect!</span>
          </p>
          <div className="flex flex-row gap-1 lg:gap-2 mt-4 w-6/12 lg:w-4/12 overflow-visible">
            {links.map((link) => (
              <a key={link.name} target="_blank" href={link.url} rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform ease-in hover:cursor-pointer">
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
      </div>
    </main>
  );
}
