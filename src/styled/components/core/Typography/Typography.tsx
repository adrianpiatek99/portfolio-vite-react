import type { ComponentPropsWithoutRef } from "react";

type TypographyTag = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "a";
type TypographyWeight = "light" | "normal" | "medium" | "semibold" | "bold";

interface TypographyProps extends ComponentPropsWithoutRef<"span"> {
  tag?: TypographyTag;
  weight?: TypographyWeight;
  center?: boolean;
}

export const Typography = ({ weight = "normal", center = false, ...props }: TypographyProps) => {
  return (
    <span
      {...props}
      className={`font-${weight} text-${center ? "center" : "left"} ${
        props?.className ? props?.className : ""
      }`}
    />
  );
};
