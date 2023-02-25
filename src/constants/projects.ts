import type { IconType } from "react-icons/lib";

import CurrentPortfolioUrl from "assets/projects/current-portfolio.png?url";
import MemoryGameUrl from "assets/projects/memory-game.png?url";
import OldPortfolioUrl from "assets/projects/old-portfolio.png?url";
import TheLabzUrl from "assets/projects/the-labz.jpg?url";
import TwitterCloneUrl from "assets/projects/twitter-clone.png?url";
import AirtableIcon from "icons/AirtableIcon";
import AwsIcon from "icons/AwsIcon";
import BuildIcon from "icons/BuildIcon";
import NextjsIcon from "icons/NextjsIcon";
import PrismaIcon from "icons/PrismaIcon";
import ReactIcon from "icons/ReactIcon";
import ReduxIcon from "icons/ReduxIcon";
import StorybookIcon from "icons/StorybookIcon";
import StyledComponentsIcon from "icons/StyledComponentsIcon";
import TailwindIcon from "icons/TailwindIcon";
import TestIcon from "icons/TestIcon";
import TrpcIcon from "icons/TrpcIcon";
import TypescriptIcon from "icons/TypescriptIcon";
import ViteIcon from "icons/ViteIcon";

const techTypes = [
  "Next.js",
  "TypeScript",
  "Vite",
  "Jest + RTL",
  "React",
  "Redux",
  "Prisma",
  "Styled Components",
  "TanStack Query",
  "Storybook",
  "Airtable",
  "AWS",
  "@craftjs/core",
  "Tailwind CSS",
  "tRPC",
  "Svelte"
] as const;

type TechTuple = typeof techTypes;

export type ProjectTech = { tech: TechTuple[number]; icon: IconType };

export type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  githubUrl?: string;
  techs: ProjectTech[];
  isPinned?: boolean;
};

const nextjsTech: ProjectTech = { tech: "Next.js", icon: NextjsIcon };
const typeScriptTech: ProjectTech = { tech: "TypeScript", icon: TypescriptIcon };
const prismaTech: ProjectTech = { tech: "Prisma", icon: PrismaIcon };
const styledComponentsTech: ProjectTech = { tech: "Styled Components", icon: StyledComponentsIcon };
const viteReactTech: ProjectTech = { tech: "Vite", icon: ViteIcon };
const reactTech: ProjectTech = { tech: "React", icon: ReactIcon };
const reduxTech: ProjectTech = { tech: "Redux", icon: ReduxIcon };
const testTech: ProjectTech = { tech: "Jest + RTL", icon: TestIcon };
const tanStackQueryTech: ProjectTech = { tech: "TanStack Query", icon: ReactIcon };
const storybookTech: ProjectTech = { tech: "Storybook", icon: StorybookIcon };
const airtableTech: ProjectTech = { tech: "Airtable", icon: AirtableIcon };
const awsTech: ProjectTech = { tech: "AWS", icon: AwsIcon };
const craftjsTech: ProjectTech = { tech: "@craftjs/core", icon: BuildIcon };
const tailwindCssTech: ProjectTech = { tech: "Tailwind CSS", icon: TailwindIcon };
const trpcTech: ProjectTech = { tech: "tRPC", icon: TrpcIcon };
// const svelteTech: ProjectTech = { tech: "Svelte", icon: SvelteIcon };

export const projects: Project[] = [
  {
    title: "Twitter Clone",
    description:
      "As in the title, it is the Twitter clone 😄\n Responsive website with basic features.",
    image: TwitterCloneUrl,
    url: "https://twitter-clone-nextjs-coral.vercel.app",
    githubUrl: "https://github.com/adrianpiatek99/twitter-clone-nextjs",
    techs: [
      nextjsTech,
      typeScriptTech,
      trpcTech,
      prismaTech,
      testTech,
      styledComponentsTech,
      tanStackQueryTech
    ],
    isPinned: true
  },
  {
    title: "The Labz",
    description:
      "The project that I have been working in my previous job.\n The Labz platform gives creatives a robust multi-media toolbox from which they can mix and match audio, video, text, links, images, video chat, and more to curate a unique and dynamic experiences.",
    image: TheLabzUrl,
    url: "https://www.thelabz.com",
    techs: [
      nextjsTech,
      typeScriptTech,
      awsTech,
      airtableTech,
      prismaTech,
      craftjsTech,
      reduxTech,
      testTech,
      storybookTech,
      styledComponentsTech
    ],
    isPinned: true
  },
  {
    title: "Current portfolio",
    description: "Portfolio website.",
    image: CurrentPortfolioUrl,
    url: "/",
    githubUrl: "https://github.com/adrianpiatek99/portfolio-vite-react",
    techs: [reactTech, viteReactTech, typeScriptTech, tailwindCssTech]
  },
  {
    title: "Old portfolio",
    description: "Old portfolio website.",
    image: OldPortfolioUrl,
    url: "https://portfolio-adrian-piatek.vercel.app",
    githubUrl: "https://github.com/adrianpiatek99/portfolio-nextjs",
    techs: [reactTech, typeScriptTech, styledComponentsTech]
  },
  {
    title: "Memory game",
    description: "Pokemon memory game.",
    image: MemoryGameUrl,
    url: "https://memory-game-react-liart.vercel.app",
    githubUrl: "https://github.com/adrianpiatek99/memory-game-react",
    techs: [reactTech, reduxTech, styledComponentsTech]
  }
];
