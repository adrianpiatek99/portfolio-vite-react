import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background1: string;
    background2: string;
    color1: string;
    color2: string;
    gray: string;
    primary: string;
    border1: string;
    fontFamily: string;
    text: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
    heading: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
    breakpointSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
