import ConsultlyLogo from "../images/logos/consultly.svg";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import MonitoLogo from "../images/logos/monito.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Erik Olivero",
  initials: "EO",
  location: "Milan, Itay, CET",
  locationLink: "https://www.google.com/maps/place/Milan",
  about:
    "Full Stack Engineer focused on building products focusing on clean code, domain-driven design, and product success.",
  summary:
    "I’m an experienced software engineer with a proven track of success in startups, product, and consultancy companies where I took the best from these worlds. I have a passion for engineering and I find great joy in tackling difficult challenges.",
  avatarUrl:
    "https://pbs.twimg.com/profile_images/1584072155632902145/S8qDtnTT_400x400.jpg",
  personalWebsiteUrl: "https://erikolivero.com",
  contact: {
    email: "ekolivero@pm.me",
    tel: "+39388651007",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ekolivero",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/erikolivero/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ekolivero",
        icon: XIcon,
      },
    ],
  },
  work: [
    {
      company: "Jobtome",
      link: "https://it.jobtome.com/",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2022",
      end: "Current",
      description: [
        "Developed and launched a high-traffic website with over 10 million daily visits using GCP, Next.js, TypeScript, and Kubernetes, while leading the testing strategy in a CI/CD environment for efficient deployments.",
      ],
    },
    {
      company: "Philip Morris International | Fincons Group",
      link: "https://www.finconsgroup.com/",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2022",
      description: [
        "Developed user interfaces for AI-driven PMI pilot projects, focusing on defect identification and predictive anomaly detection to minimize machine breakdowns and costs; also led the transformation of the PMI portal into microfrontends, enhancing team ownership and CI/CD efficiency, with hands-on experience in both GQL server and client.",
      ],
    },
    {
      company: "Hype S.p.A. | Illimity Bank",
      link: "https://www.hype.it/",
      badges: ["Remote", "Turin, Italy"],
      title: "Front End Developer",
      logo: ParabolLogo,
      start: "2019",
      end: "2021",
      description: [
        "Developed an onboarding application to streamline new customer acquisition, incorporating personal data, video confirmations, and attachments, with integrated A/B testing to reduce drop rates and improve user experience; collaborated with SREs and Solution Architects for a seamless migration from on-premises infrastructure to a cloud environment.",
      ],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Docker",
    "Postgres",
    "Microservices and Microfrontends",
    "Design Systems (Storybook, Figma)",
  ],
  projects: [
    {
      title: "AI-Intl",
      techStack: ["Side Project", "TypeScript", "Node", "OpenAI API", "OSS"],
      description:
        "Battery-included CLI that manage your translations for you 🚀",
      logo: ConsultlyLogo,
      link: {
        label: "ai-intl",
        href: "https://github.com/ekolivero/ai-intl",
      },
    },
    {
      title: "Assert-server",
      techStack: ["Side Project", "TypeScript", "Fastify", "E2E testing"],
      description:
        "Framework agnostic e2e-testing solution for distributed system.",
      logo: MonitoLogo,
      link: {
        label: "assert-server",
        href: "https://github.com/jobtome-labs/assert-server",
      },
    },
    {
      title: "@erikolivero",
      techStack: ["Video Editing", "Content Creation", "Social Media Strategy"],
      description:
        "Tiktok channel where I share my knowledge about software engineering",
      logo: JarockiMeLogo,
      link: {
        label: "tiktok",
        href: "https://www.tiktok.com/@erikolivero",
      },
    },
  ],
} as const;
