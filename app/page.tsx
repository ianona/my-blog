"use client";
import Hero from "@/src/components/Hero";
import Timeline from "@/src/components/Timeline";
import TimelineItem from "@/src/components/TimelineItem";
import ContactForm from "@/src/components/ContactForm";
import PublicationItem from "@/src/components/PublicationItem";
import ProjectCard from "@/src/components/ProjectCard";
import { useState } from "react";

const projects = [
  {
    title: "Likha Academy",
    description:
      "An online educational platform that lets users purchase and stream courses related to urban agriculture",
    stack: ["Nuxt.js", "Strapi", "Paymongo API", "AWS"],
  },
  {
    title: "COVID Vaccine Allocation App",
    description: "A research project that models the optimal COVID vaccine allocation across varying population sizes",
    stack: ["Python Flask", "React.js"]
  },
  {
    title: "Student Management Dashboard",
    description: "A personal dashboard requested by a private tutor for the management of sessions, students, and payments.",
    stack: ["Vue.js", "Django", "Google API"]
  },
  {
    title: "Casini Scanner",
    description: "A mobile utility for barcode scanning and inventory tracking commissioned by a buy & sell company in the Philippines.",
    stack: ["React Native", "Expo"]
  }
];
export default function Home() {
  const [cur, setCur] = useState(0);
  console.log("O", cur)
  const previousSlide = () => {
    setCur((c) => (c == 0 ? projects.length - 1 : c - 1));
  };
  const nextSlide = () => {
    setCur((c) => (c == projects.length - 1 ? 0 : c + 1));
  };

  return (
    <div>
      {/* <Head>
        <title>Ian Ona</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Hero />

      {/* Resume */}
      <div
        id="resume"
        className="flex flex-col md:flex-row md:gap-4 w-10/12 md:w-12/12 mx-auto"
      >
        <div className="md:w-6/12">
          <h1 className="text-4xl font-semibold">Work Experience</h1>
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
              >
                Developed the{" "}
                <mark>core product of an early stage startup</mark> that focuses
                on workout tracking for CrossFit athletes.
              </TimelineItem>
              <TimelineItem
                title="Fullstack Web Developer @ MedAlert ERx"
                time="2021📍Remote Work"
                stack={["Grab API", "Strapi", "React.js"]}
              >
                MedAlert ERx is a Philippine-based startup that digitalizes
                medical prescriptions, health records, and pharmaceutical
                deliveries. During my time here, I{" "}
                <mark>designed and implemented the delivery system</mark> on the
                server as well as the delivery interface for end users.
              </TimelineItem>
              <TimelineItem
                title="I.T. Intern @ Proctor & Gamble"
                time="2019📍Bonifacio Global City, Philippines"
                stack={["Python Flask", "Bootstrap"]}
              >
                During my time at P&G, my main project was a{" "}
                <mark>
                  web application that converted base perfume formulas
                </mark>{" "}
                to specific product formulations based on business requirements.
                I also did{" "}
                <mark>research on generative adversarial networks</mark> to
                generate synthetic data for testing in-house research projects.
              </TimelineItem>
              <TimelineItem
                title="Software Engineering Intern @ Azeus Systems Ltd."
                time="2019📍Ortigas Center, Philippines"
                stack={["Vue.js", "Java Springboot", "Kotlin", "JPA Hibernate"]}
              >
                Developed additional modules for an in-house{" "}
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
                Graduated <mark>Magna Cum Laude (3.79/4.00)</mark> and a member
                of the Jose Rizal Honor Society for consistent 1st honors for 4
                years. Received the Bronze Award for Best Undergraduate Thesis
                and extra curriculars include Vice President of the Peer Tutor
                Society and Batch President.
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-col w-10/12 md:w-12/12 mx-auto">
        <div className="w-12/12">
          <h1 className="text-4xl font-semibold">Freelance Projects</h1>
          <div className="flex flex-row">
            <button onClick={previousSlide} className="z-20">←</button>
            <div className="mt-4 w-[32rem] m-auto relative items-center">
              <div className="flex transition ease-out duration-75"
                style={{
                  transform: `translateX(-${cur * 22}rem)`
                }}>
                {
                  projects.map((p, i) => (
                    <ProjectCard
                      title={p.title}
                      description={p.description}
                      stack={p.stack}
                      key={p.title}
                      activeIndex={cur}
                      index={i}
                    />
                  ))
                }
              </div>

            </div>
            <button onClick={nextSlide} className="z-20">→</button>
          </div>
        </div>
      </div>

      {/* Pubs */}
      <div className="flex flex-col w-10/12 md:w-12/12 mx-auto py-8">
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
      <div id="contact" className="flex flex-col w-10/12 md:w-12/12 mx-auto">
        <div className="w-12/12">
          <h1 className="text-4xl font-semibold">Let&apos;s get in touch!</h1>
          <article className="mt-2 text-xl font-light">
            I am always on the lookout for exciting opportunities to build
            things or share what I know.
            <br />
            Feel free to reach out for any reason! 🤠
          </article>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
