"use client";
import Hero from "@/src/components/Hero";
import Timeline from "@/src/components/Timeline";
import TimelineItem from "@/src/components/TimelineItem";
import ContactForm from "@/src/components/ContactForm";
import PublicationItem from "@/src/components/PublicationItem";
import ProjectCard from "@/src/components/ProjectCard";
import { useEffect, useState } from "react";
import useIsMobile from "@/src/hooks/useIsMobile";
import Head from "next/head";
import Image from "next/image";
import heroPic from "@/public/heropicnew.png";
import ProgressBar from "@/src/components/ProgressBar";
import Iconify from "@/src/components/Iconify";
import { skills } from "@/src/components/skills";
import SkillsGrid from '@/src/components/SkillsGrid';
const projects = [
  {
    title: "COVID Vaccine Allocation App",
    description:
      "A research project that models the optimal COVID vaccine allocation across varying population sizes",
    stack: ["Python Flask", "React.js"],
    icons: ["skill-icons:flask-dark", "skill-icons:react-dark"],
    img: "/vacmodel.jpg",
  },
  {
    title: "Student Management Dashboard",
    description:
      "A personal dashboard for the management of sessions, students, and payments.",
    stack: ["Vue.js", "Django", "Google API"],
    icons: [
      "devicon:vuejs",
      "logos:django-icon",
      "logos:google-cloud-functions",
    ],
    img: "/mgmt.jpg",
  },
  {
    title: "Casini Scanner",
    description:
      "A mobile utility for barcode scanning and inventory tracking commissioned by a buy & sell company in the Philippines.",
    stack: ["React Native", "Expo"],
    icons: ["skill-icons:react-dark", "vscode-icons:file-type-light-expo"],
    img: "https://openasapp.com/wp-content/uploads/2022/10/Barcode-Scanner-App-Featured-Image.jpeg",
  },
  {
    title: "CollegeBound",
    description:
      "An ongoing project that aims to aid high school seniors ace their college entrance exams",
    icons: [
      "devicon:nextjs",
      "logos:hasura-icon",
      "devicon:postgresql",
      "logos:mantine-icon",
    ],
    img: "/mystery.png",
  },
];

export default function Home() {
  const [cur, setCur] = useState(0);
  const isSmallDevice = useIsMobile();
  const translationFactor = isSmallDevice ? 0 : 320;
  const previousSlide = () => {
    setCur((c) => (c == 0 ? projects.length - 1 : c - 1));
  };
  const nextSlide = () => {
    setCur((c) => (c == projects.length - 1 ? 0 : c + 1));
  };

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
    <div className="flex flex-col items-center">
      <Head>
        <title>Ian Ona</title>
        <meta name="description" content="Ian Ona Resume Website" />
        <link rel="icon" type="image/ico" href="/favicon.png" />
      </Head>
      <Hero />

      {true && (
        <div
          id="tech"
          className="flex flex-col md:gap-4 w-[100vw] px-[5vw] mx-auto my-8"
        >
          <h1 className="text-4xl font-semibold">Tech Skills</h1>
          <SkillsGrid isMobile={isSmallDevice} />
        </div>
      )}

      {/* Resume */}
      <div
        id="resume"
        className="flex flex-col md:flex-row md:gap-4 w-[100vw] px-[5vw] mx-auto"
      >
        <div className="md:w-6/12">
          <h1 className="text-4xl font-semibold">Experience</h1>
          <div className="mt-4">
            <Timeline>
              <TimelineItem
                title="Fullstack Web Developer @ Kinetik Athlete (WOD.co)"
                time="2022-Present📍Taipei, Taiwan"
                stack={[
                  "Next.js",
                  "Material UI",
                  "Hasura GraphQL",
                  "React Relay",
                  "plpgsql",
                ]}
                icons={[
                  "devicon:nextjs",
                  "devicon:materialui",
                  "logos:hasura-icon",
                  "simple-icons:relay",
                  "devicon:postgresql",
                ]}
              >
                <mark>
                  Developed the core product of an early stage startup
                </mark>{" "}
                that focuses on workout tracking for CrossFit athletes.
              </TimelineItem>
              <TimelineItem
                title="Fullstack Web Developer @ Unexus Medical Solutions"
                time="2021📍Remote Work"
                stack={["Grab API", "Strapi", "React.js"]}
                icons={[
                  "simple-icons:grab",
                  "logos:strapi-icon",
                  "devicon:nodejs",
                  "skill-icons:react-dark",
                ]}
              >
                <mark>Designed and implemented the delivery system</mark> on the
                server and the <mark>delivery interface</mark> for a Philippine-based startup that digitalizes
                medical prescriptions, health records, and pharmaceutical
                deliveries.
              </TimelineItem>
              <TimelineItem
                title="Fullstack Web Developer @ Likha Academy"
                time="2021📍Remote Work"
                icons={[
                  "devicon:nuxtjs",
                  "logos:strapi-icon",
                  "devicon:nodejs",
                  "devicon:amazonwebservices-wordmark",
                ]}
              >
                <mark>Developed an online educational platform</mark> that lets
                users purchase and stream courses related to urban agriculture
              </TimelineItem>
              <TimelineItem
                title="I.T. Intern @ Proctor & Gamble"
                time="2019📍Bonifacio Global City, Philippines"
                stack={["Python Flask", "Bootstrap"]}
                icons={["skill-icons:flask-dark", "skill-icons:bootstrap"]}
              >
                Developed tools that helped streamline product research and development.
                I also{" "}
                <mark>researched on generative adversarial networks</mark> to
                generate synthetic data for in-house research projects.
              </TimelineItem>
              <TimelineItem
                title="Software Engineering Intern @ Azeus Systems Ltd."
                time="2019📍Ortigas Center, Philippines"
                stack={["Vue.js", "Java Springboot", "Kotlin", "JPA Hibernate"]}
                icons={[
                  "devicon:vuejs",
                  "bxl:spring-boot",
                  "devicon:kotlin",
                  "logos:hibernate",
                ]}
              >
                Developed modules for a{" "}
                <mark>resource tracking system</mark>: report generators, import
                report functionality, request for resources module, and a module
                for comments.
              </TimelineItem>
            </Timeline>
          </div>
        </div>
        <div className="md:w-6/12">
          <h1 className="text-4xl font-semibold">Education</h1>
          <div className="mt-4">
            <Timeline>
              <TimelineItem
                title="National Taiwan University of Science and Technology"
                time="M.S. Computer Science 2021-2022 🇹🇼"
              >
                During my time in NTUST, I was a scholarship recipient and I
                researched on <mark>unsupervised image segmentation</mark> in
                the multimedia and image processing laboratory of Professor
                Kai-Lung Hua.
              </TimelineItem>
              <TimelineItem
                title="De La Salle University - Manila"
                time="B.S. Computer Science 2016-2020 🇵🇭"
              >
                Graduated <mark>Magna Cum Laude (3.79/4.00)</mark> and was consistent 1st honors for 4
                years. Received the Bronze Award for Best Undergraduate Thesis.
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-col w-[100vw] px-[5vw] mx-auto">
        <h1 className="text-4xl font-semibold">Projects</h1>
        <div className="flex flex-row">
          <button onClick={previousSlide} className="z-20">
            ←
          </button>
          <div className="mt-4 w-auto md:w-[480px] mx-auto relative items-center">
            <div
              className="flex transition ease-out duration-75"
              style={{
                transform: `translateX(-${cur * translationFactor}px)`,
              }}
            >
              {projects.map((p, i) => (
                <ProjectCard
                  title={p.title}
                  description={p.description}
                  icons={p.icons}
                  img={p.img}
                  key={p.title}
                  activeIndex={cur}
                  index={i}
                />
              ))}
            </div>
          </div>
          <button onClick={nextSlide} className="z-20">
            →
          </button>
        </div>
      </div>

      {/* Pubs */}
      <div className="flex flex-col w-[100vw] px-[5vw] mx-auto py-8">
        <div className="w-12/12">
          <h1 className="text-4xl font-semibold">Publications & Awards</h1>
          <div className="mt-4 flex flex-col">
            <PublicationItem
              title="Development of a Web-based Application for Optimal Allocation of
                COVID-19 Vaccine, Chemical Engineering Transactions."
              url="https://doi.org/10.3303/CET2188092"
              isPaper
            />
            <PublicationItem
              title="From Access to Effective Use: Open Data Portals for Everyday Citizens. In AsianCHI '20."
              url="https://doi.org/10.1145/3391203.3391219"
              isPaper
            />
            <PublicationItem title="Bronze Medal for Most Outstanding Thesis - DataPH: Improving Universal Participation through Data Stories of Integrated Open Government Data" />
            <PublicationItem title="1st Place - Huawei ICT Competition for Networking, Philippines (Nationwide)" />
            <PublicationItem title="Best Use of Data - National Aeronautics and Space Administration (NASA) International Space Apps Challenge" />
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="flex flex-col w-[100vw] px-[5vw] mx-auto">
        <div className="w-12/12">
          <h1 className="text-4xl font-semibold">Let&apos;s get in touch!</h1>
          <article className="mt-2 text-xl font-light">
            I am always on the lookout for exciting opportunities to build
            things or meet new people
            <br />
            Feel free to reach out 😄
          </article>
          <ContactForm />
        </div>
      </div>

      {/* About */}
      {true && (
        <div
          id="about-me"
          className="h-[60vh] md:h-[40vh] w-[100vw] flex flex-col items-center"
        >
          <div className={`w-[220px]`}>
            <Image src={heroPic} alt="Ian Ona" className="rounded-full" />
          </div>
          <div className="flex-grow w-10/12 md:w-6/12">
            <div className="w-10/12 md:w-6/12 mx-auto flex flex-row gap-2 mt-8">
              <ProgressBar progress={progress} />
              <ProgressBar progress={progress - 100} />
              <ProgressBar progress={progress - 200} />
            </div>
            <div className="w-10/12 md:w-6/12 mx-auto relative text-center bg-gray-600">
              <p
                className={`${onSlideOne
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0 -z-10"
                  } absolute top-0 mt-2 md:mt-4 md:text-xl font-light transition-all duration-300 ease-in`}
              >
                I’m a full-stack web developer currently based in Taipei 🇹🇼 I
                love to create and share what I learn, so I thought I’d do a bit
                of both here
              </p>
              <p
                className={`${onSlideTwo
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0 -z-10"
                  } absolute top-0 mt-2 md:mt-4 md:text-xl font-light transition-all duration-300 ease-in`}
              >
                My experience has mostly been with startups in Taiwan and in the
                Philippines. I also like to collaborate with friends for
                projects I find interesting.
              </p>
              <p
                className={`${onSlideThree
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0 -z-10"
                  } absolute top-0 mt-2 md:mt-4 md:text-xl font-light transition-all duration-300 ease-in`}
              >
                In my free time I like to do CrossFit, hike mountains, read, or
                just chill with friends. I also like to do volunteer work for
                church.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
