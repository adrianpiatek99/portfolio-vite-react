type Skill = {
  src: string;
  website: string;
  text: string;
};
type SkillLevel = 1 | 2 | 3 | 4 | 5;

type ExperiencedWithSkill = Skill & { level: SkillLevel };

export const skills: {
  experiencedWith: ExperiencedWithSkill[];
  also: Skill[];
  wantToLearn: Skill[];
} = {
  experiencedWith: [
    {
      src: "src/assets/skills/next-js.svg",
      website: "https://nextjs.org",
      text: "Next.js",
      level: 4
    },
    {
      src: "src/assets/skills/react.svg",
      website: "https://reactjs.org",
      text: "React.js",
      level: 5
    },
    {
      src: "src/assets/skills/svelte.svg",
      website: "https://svelte.dev",
      text: "Svelte",
      level: 2
    },
    {
      src: "src/assets/skills/typescript.svg",
      website: "https://www.typescriptlang.org",
      text: "TypeScript",
      level: 4
    },
    {
      src: "src/assets/skills/prisma.svg",
      website: "https://www.prisma.io",
      text: "Prisma",
      level: 4
    },
    {
      src: "src/assets/skills/trpc.svg",
      website: "https://trpc.io",
      text: "tRPC",
      level: 2
    },
    {
      src: "src/assets/skills/redux.svg",
      website: "https://redux-toolkit.js.org",
      text: "Redux Toolkit",
      level: 4
    },
    {
      src: "src/assets/skills/storybook.svg",
      website: "https://storybook.js.org",
      text: "Storybook",
      level: 3
    },
    {
      src: "src/assets/skills/react-query.svg",
      website: "https://tanstack.com/query/latest",
      text: "React Query",
      level: 4
    },
    {
      src: "src/assets/skills/react-hook-form.svg",
      website: "https://react-hook-form.com",
      text: "React Hook Form",
      level: 4
    },
    {
      src: "src/assets/skills/tailwind-css.svg",
      website: "https://tailwindcss.com",
      text: "Tailwind CSS",
      level: 5
    },
    {
      src: "src/assets/skills/styled-components.svg",
      website: "https://styled-components.com",
      text: "Styled Components",
      level: 5
    },
    {
      src: "src/assets/skills/material-ui.svg",
      website: "https://mui.com/core/",
      text: "Material UI",
      level: 4
    },
    {
      src: "src/assets/skills/eslint.svg",
      website: "https://eslint.org",
      text: "ESLint",
      level: 3
    },
    {
      src: "src/assets/skills/prettier.svg",
      website: "https://prettier.io",
      text: "Prettier",
      level: 3
    },
    {
      src: "src/assets/skills/vite.svg",
      website: "https://vitejs.dev",
      text: "Vite",
      level: 3
    },
    {
      src: "src/assets/skills/jest.svg",
      website: "https://jestjs.io",
      text: "Jest",
      level: 3
    },
    {
      src: "src/assets/skills/react-testing-library.svg",
      website: "https://testing-library.com/docs/react-testing-library/intro/",
      text: "RTL",
      level: 3
    },
    {
      src: "src/assets/skills/msw.svg",
      website: "https://mswjs.io",
      text: "msw",
      level: 3
    }
  ],
  also: [
    {
      src: "src/assets/skills/zod.svg",
      website: "https://zod.dev",
      text: "Zod ❤️"
    },
    {
      src: "src/assets/skills/yup.svg",
      website: "https://github.com/jquense/yup",
      text: "Yup"
    },
    {
      src: "src/assets/skills/zustand.svg",
      website: "https://zustand-demo.pmnd.rs",
      text: "Zustand ❤️"
    }
  ],
  wantToLearn: [
    {
      src: "src/assets/skills/graphql.svg",
      website: "https://graphql.org",
      text: "GraphQL"
    },
    {
      src: "src/assets/skills/cypress.svg",
      website: "https://www.cypress.io",
      text: "Cypress"
    }
  ]
};
