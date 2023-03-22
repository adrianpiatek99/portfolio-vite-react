import cypressIcon from "assets/icons/cypress.svg";
import eslintIcon from "assets/icons/eslint.svg";
import gatsbyIcon from "assets/icons/gatsby.svg";
import graphqlIcon from "assets/icons/graphql.svg";
import jestIcon from "assets/icons/jest.svg";
import materialUiIcon from "assets/icons/material-ui.svg";
import mswIcon from "assets/icons/msw.svg";
import nextjsIcon from "assets/icons/next-js.svg";
import playwrightIcon from "assets/icons/playwright.svg";
import prettierIcon from "assets/icons/prettier.svg";
import prismaIcon from "assets/icons/prisma.svg";
import reactIcon from "assets/icons/react.svg";
import reactHookFormIcon from "assets/icons/react-hook-form.svg";
import reactQueryIcon from "assets/icons/react-query.svg";
import reactTestingLibraryIcon from "assets/icons/react-testing-library.svg";
import reduxIcon from "assets/icons/redux.svg";
import storybookIcon from "assets/icons/storybook.svg";
import styledComponentsIcon from "assets/icons/styled-components.svg";
import svelteIcon from "assets/icons/svelte.svg";
import tailwindcssIcon from "assets/icons/tailwind-css.svg";
import trpcIcon from "assets/icons/trpc.svg";
import typescriptIcon from "assets/icons/typescript.svg";
import viteIcon from "assets/icons/vite.svg";
import yupIcon from "assets/icons/yup.svg";
import zodIcon from "assets/icons/zod.svg";
import zustandIcon from "assets/icons/zustand.svg";

type Skill = {
  src: string;
  website: string;
  text: string;
};

export const skills: {
  experiencedWith: Skill[];
  wantToLearn: Skill[];
} = {
  experiencedWith: [
    {
      src: nextjsIcon,
      website: "https://nextjs.org",
      text: "Next.js"
    },
    {
      src: reactIcon,
      website: "https://reactjs.org",
      text: "React.js"
    },
    {
      src: svelteIcon,
      website: "https://svelte.dev",
      text: "Svelte"
    },
    {
      src: typescriptIcon,
      website: "https://www.typescriptlang.org",
      text: "TypeScript"
    },
    {
      src: prismaIcon,
      website: "https://www.prisma.io",
      text: "Prisma"
    },
    {
      src: trpcIcon,
      website: "https://trpc.io",
      text: "tRPC"
    },
    {
      src: graphqlIcon,
      website: "https://graphql.org",
      text: "GraphQL"
    },
    {
      src: reduxIcon,
      website: "https://redux-toolkit.js.org",
      text: "Redux Toolkit"
    },
    {
      src: storybookIcon,
      website: "https://storybook.js.org",
      text: "Storybook"
    },
    {
      src: reactQueryIcon,
      website: "https://tanstack.com/query/latest",
      text: "React Query"
    },
    {
      src: reactHookFormIcon,
      website: "https://react-hook-form.com",
      text: "React Hook Form"
    },
    {
      src: tailwindcssIcon,
      website: "https://tailwindcss.com",
      text: "Tailwind CSS"
    },
    {
      src: styledComponentsIcon,
      website: "https://styled-components.com",
      text: "Styled Components"
    },
    {
      src: materialUiIcon,
      website: "https://mui.com/core/",
      text: "Material UI"
    },
    {
      src: eslintIcon,
      website: "https://eslint.org",
      text: "ESLint"
    },
    {
      src: prettierIcon,
      website: "https://prettier.io",
      text: "Prettier"
    },
    {
      src: viteIcon,
      website: "https://vitejs.dev",
      text: "Vite"
    },
    {
      src: jestIcon,
      website: "https://jestjs.io",
      text: "Jest"
    },
    {
      src: reactTestingLibraryIcon,
      website: "https://testing-library.com/docs/react-testing-library/intro/",
      text: "RTL"
    },
    {
      src: mswIcon,
      website: "https://mswjs.io",
      text: "msw"
    },
    {
      src: zodIcon,
      website: "https://zod.dev",
      text: "Zod ❤️"
    },
    {
      src: yupIcon,
      website: "https://github.com/jquense/yup",
      text: "Yup"
    },
    {
      src: zustandIcon,
      website: "https://zustand-demo.pmnd.rs",
      text: "Zustand ❤️"
    },
    {
      src: gatsbyIcon,
      website: "https://www.gatsbyjs.com",
      text: "Gatsby"
    }
  ],
  wantToLearn: [
    {
      src: reactIcon,
      website: "https://reactnative.dev",
      text: "React Native"
    },
    {
      src: cypressIcon,
      website: "https://www.cypress.io",
      text: "Cypress"
    },
    {
      src: playwrightIcon,
      website: "https://playwright.dev",
      text: "Playwright"
    }
  ]
};
