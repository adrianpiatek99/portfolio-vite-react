import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

interface CustomLinkProps extends ComponentPropsWithoutRef<"a"> {
  href: string;
  icon?: ReactNode;
}

export const CustomLink = ({ children, href, icon, ...props }: CustomLinkProps) => {
  return (
    <LinkElement to={href} {...props}>
      {icon && icon}
      {children}
    </LinkElement>
  );
};

const LinkElement = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  ${({ theme }) => theme.text.xl};
  transition: opacity 0.2s, filter 0.2s, box-shadow 0.2s;

  & > svg {
    width: 22px;
    height: 22px;
    margin-right: 10px;
  }

  @media (hover: hover) {
    &:hover:not(:disabled) {
      opacity: 0.65;
    }
  }

  &:active {
    filter: brightness(1.2);
  }

  &:focus-visible {
    box-shadow: 0px 1px 0px currentColor;
  }
`;
