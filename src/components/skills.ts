export interface Skill {
  name: string;
  iconify: string;
  description: string;
  color?: string;
}
export const skills: Skill[] = [
  {
    name: "TypeScript",
    iconify: "devicon:typescript",
    description: "what I use on a regular basis for frontend web dev",
    color: "#5DC6FF",
  },
  {
    name: "Next.js",
    iconify: "devicon:nextjs",
    description:
      "use this in my day job for the past 2 years and for side projects",
    color: "#1D4E89",
  },
  {
    name: "Nuxt.js",
    iconify: "devicon:nuxtjs",
    description:
      "used for a couple of small projects in the past and during my internship",
    color: "#9F9F9F",
  },
  {
    name: "Python",
    iconify: "devicon:python",
    description:
      "for scripting, web scraping, data analysis, automation, and leetcode",
    color: "#1D4E89",
  },
  {
    name: "Node.js",
    iconify: "devicon:nodejs",
    description: "used for restful API development with express",
    color: "#5DC6FF",
  },
  {
    name: "Hasura GraphQL",
    iconify: "logos:hasura-icon",
    description:
      "for building graphql APIs, usually use it with relay on the frontend",
  },
  {
    name: "PostgreSQL",
    iconify: "devicon:postgresql",
    description:
      "my go-to relational database, experienced in scripting with PL/pgSQL",
    color: "#1D4E89",
  },
  {
    name: "Docker",
    iconify: "devicon:docker",
    description: "usually containerize my web projects for ease of use and dx",
  },
  {
    name: "SwiftUI",
    iconify: "devicon:swift",
    description:
      "currently learning this (100 Days of Swift) and building an iOS utility app",
  },
  {
    name: "React Native",
    iconify: "devicon:react",
    description:
      "for prototyping on mobile; built a barcode scanner for a small business",
  },
  {
    name: "Java",
    iconify: "devicon:java-wordmark",
    description:
      "used this for frontend (fx), backend (spring), and mobile (android)",
  },
  {
    name: "Kotlin",
    iconify: "devicon:kotlin",
    description: "developed a java library using kotlin for internship",
  },
  {
    name: "PyTorch",
    iconify: "devicon:pytorch",
    description:
      "used this mainly for my graduate thesis for computer vision research",
  },
  {
    name: "AWS",
    iconify: "devicon:amazonwebservices-wordmark",
    description: "used for for deployment for past projects (s3, ec2, amplify)",
  },
  {
    name: "GCP",
    iconify: "devicon:googlecloud",
    description:
      "deployment solution for my day job, familiar with its core features",
  },
  {
    name: "CI/CD",
    iconify: "devicon:terraform",
    description:
      "familiar with ci/cd pipelines involving terraform & github actions",
  },
  {
    name: "Adobe Suite",
    iconify: "ic:baseline-adobe",
    description:
      "proficient in photoshop, after effects, premiere pro; familiar with illustrator and indesign.",
  },
  {
    name: "Figma",
    iconify: "devicon:figma",
    description: "my primary mock-up tool",
  },
  {
    name: "Material UI",
    iconify: "devicon:materialui",
    description: "have used this for large projects and my day job",
  },
  {
    name: "Tailwind",
    iconify: "devicon:tailwindcss",
    description:
      "usually use it for smaller scale projects and implementing custom mockups",
  },
  {
    name: "Agile",
    iconify: "iconoir:agile",
    description:
      "experienced in fast paced startup environments using agile workflows",
  },
  {
    name: "and more!",
    iconify: "mingcute:more-3-fill",
    description:
      "feel free to reach out to get a comprehensive list of my technical skills",
  },
];
