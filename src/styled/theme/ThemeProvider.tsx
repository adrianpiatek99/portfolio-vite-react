import type { ReactNode } from "react";

import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { theme } from "./theme";

export const ThemeProvider = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
