import type { DefaultTheme } from "styled-components";

const fonts = {
  text: {
    xs: "font-size: 12px; line-height: 15px;",
    s: "font-size: 14px; line-height: 17px;",
    m: "font-size: 16px; line-height: 20px;",
    l: "font-size: 18px; line-height: 22px;",
    xl: "font-size: 20px; line-height: 24px;",
    xxl: "font-size: 24px; line-height: 28px;"
  },
  heading: {
    xs: "font-size: 24px; line-height: 28px;",
    s: "font-size: 29px; line-height: 35px;",
    m: "font-size: 35px; line-height: 43px;",
    l: "font-size: 42px; line-height: 49px;",
    xl: "font-size: 49px; line-height: 56px;",
    xxl: "font-size: 64px; line-height: 71px;"
  },
  fontFamily: "font-family: -apple-system, BlinkMacSystemFont, Inter, Helvetica, Arial, sans-serif;"
};

const breakpointSizes = {
  xs: "475px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px"
};

const breakpoints = {
  xs: `screen and (min-width: ${breakpointSizes.xs})`,
  sm: `screen and (min-width: ${breakpointSizes.sm})`,
  md: `screen and (min-width: ${breakpointSizes.md})`,
  lg: `screen and (min-width: ${breakpointSizes.lg})`,
  xl: `screen and (min-width: ${breakpointSizes.xl})`,
  xxl: `screen and (min-width: ${breakpointSizes.xxl})`
};

export const theme: DefaultTheme = {
  background1: "#060606",
  background2: "#0c0c0e",
  color1: "#edebe8",
  color2: "#999999",
  gray: "#cccccc",
  primary: "#4615b2",
  border1: "#333333",
  ...fonts,
  breakpointSizes,
  breakpoints
};
