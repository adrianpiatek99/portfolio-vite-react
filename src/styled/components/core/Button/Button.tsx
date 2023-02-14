import type { ComponentPropsWithRef, MouseEvent, Ref } from "react";
import { forwardRef } from "react";

import styled from "styled-components";
import { handleCreateRippleEffect } from "utils/rippleUtils";

import type { ButtonElementProps, ButtonTextAlign } from "./buttonStyle";
import { generalButtonStyles } from "./buttonStyle";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  fullWidth?: boolean;
  textAlign?: ButtonTextAlign;
}

export const Button = forwardRef(
  (
    { children, fullWidth = false, textAlign = "center", ...props }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      handleCreateRippleEffect(e);

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
  background-color: ${({ theme }) => theme.primary};

  & > span {
    z-index: 1;
  }
`;
