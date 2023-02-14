import type { ComponentPropsWithRef, MouseEvent, Ref } from "react";
import { forwardRef } from "react";

import styled, { useTheme } from "styled-components";
import { handleCreateRippleEffect } from "utils/rippleUtils";

import type { ButtonElementProps, ButtonTextAlign } from "./buttonStyle";
import { generalButtonStyles } from "./buttonStyle";

interface ButtonScrollToProps extends ComponentPropsWithRef<"button"> {
  elementId: string;
  fullWidth?: boolean;
  textAlign?: ButtonTextAlign;
}

export const ButtonScrollTo = forwardRef(
  (
    { children, elementId, fullWidth = false, textAlign = "center", ...props }: ButtonScrollToProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const { primary } = useTheme();

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }

      handleCreateRippleEffect(e, primary);
      props.onClick?.(e);
    };

    return (
      <ButtonElement
        $fullWidth={fullWidth}
        textAlign={textAlign}
        {...props}
        onClick={handleClick}
        ref={ref}
      >
        <span>{children}</span>
      </ButtonElement>
    );
  }
);

const ButtonElement = styled.button<ButtonElementProps>`
  ${generalButtonStyles};

  & > span {
    z-index: 1;
  }
`;
