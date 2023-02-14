import type { ComponentPropsWithRef, MouseEvent, Ref } from "react";
import { forwardRef } from "react";

import { Tooltip } from "shared/Tooltip";
import styled, { css, useTheme } from "styled-components";
import { handleCreateRippleEffect } from "utils/rippleUtils";

type IconButtonSize = "medium" | "large";

interface IconButtonProps extends ComponentPropsWithRef<"button"> {
  title: string;
  fullWidth?: boolean;
  size?: IconButtonSize;
}

export const IconButton = forwardRef(
  (
    { children, title = "", size = "medium", ...props }: IconButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const { primary } = useTheme();

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      handleCreateRippleEffect(e, primary);

      props.onClick?.(e);
    };

    return (
      <Tooltip content={title}>
        <ButtonElement
          type="button"
          aria-label={title}
          size={size}
          {...props}
          onClick={handleClick}
          ref={ref}
        >
          {children}
        </ButtonElement>
      </Tooltip>
    );
  }
);

type IconButtonElementProps = {
  size: IconButtonSize;
};

const ButtonElement = styled.button<IconButtonElementProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  color: ${({ theme }) => theme.color1};
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.2s, box-shadow 0.2s;

  & > svg {
    width: 22px;
    height: 22px;
  }

  @media (hover: hover) {
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => `${theme.primary}75`};
    }
  }

  &:focus-visible {
    background-color: ${({ theme }) => `${theme.primary}55`};
    box-shadow: ${({ theme }) => `${theme.primary}75`} 0px 0px 0px 2px;
  }

  ${({ size }) =>
    size === "large" &&
    css`
      padding: 8px;
      & > svg {
        width: 32px;
        height: 32px;
      }
    `}
`;
