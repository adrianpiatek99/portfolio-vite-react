import type { ComponentPropsWithoutRef } from "react";

import type { DefaultTheme } from "styled-components";
import styled, { css } from "styled-components";

type TypographyTag = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "a";
type TypographySize = keyof DefaultTheme["text"];
type TypographyWeight = 300 | 400 | 500 | 600 | 700;
type Color = "primary" | "secondary";

interface TypographyProps extends ComponentPropsWithoutRef<"span"> {
  tag?: TypographyTag;
  size?: TypographySize;
  mobileSize?: TypographySize;
  weight?: TypographyWeight;
  color?: Color;
  truncate?: boolean;
  center?: boolean;
  heading?: boolean;
  customColor?: string;
}

export const Typography = ({
  tag = "span",
  weight = 400,
  size = "m",
  mobileSize,
  color = "primary",
  truncate = false,
  center = false,
  heading = false,
  customColor,
  ...props
}: TypographyProps) => {
  return (
    <TypographyElement
      as={tag}
      weight={weight}
      size={size}
      mobileSize={mobileSize}
      heading={heading}
      center={center}
      color={color}
      $truncate={truncate}
      customColor={customColor}
      {...props}
    />
  );
};

type TypographyElementProps = {
  size: TypographySize;
  mobileSize?: TypographySize;
  weight: TypographyWeight;
  color: Color;
  heading: boolean;
  center: boolean;
  $truncate: boolean;
  customColor?: string;
};

const TypographyElement = styled.span<TypographyElementProps>`
  color: ${({ theme, color, customColor }) =>
    customColor ? customColor : color === "secondary" ? theme.color2 : theme.color1};
  font-weight: ${({ weight }) => weight};
  text-align: ${({ center }) => (center ? "center" : "left")};
  ${({ theme, size, heading }) => (heading ? theme.heading[size] : theme.text[size])};

  ${({ $truncate }) =>
    $truncate &&
    css`
      white-space: nowrap;
      overflow: hidden;
      typography-overflow: ellipsis;
      max-width: 100%;
    `};

  ${({ mobileSize, heading }) =>
    mobileSize &&
    css`
      ${({ theme }) => (heading ? theme.heading[mobileSize] : theme.text[mobileSize])};
    `}

  @media ${({ theme }) => theme.breakpoints.sm} {
    ${({ theme, size, heading }) => (heading ? theme.heading[size] : theme.text[size])};
  }
`;
