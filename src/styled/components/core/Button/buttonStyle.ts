import { css } from "styled-components";

export type ButtonTextAlign = "left" | "center";

export type ButtonElementProps = {
  $fullWidth: boolean;
  textAlign: ButtonTextAlign;
};

export const generalButtonStyles = css<ButtonElementProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${({ textAlign }) => (textAlign === "left" ? "flex-start" : "center")};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "max-content")};
  height: 36px;
  padding: 0 16px;
  color: ${({ theme }) => theme.color1};
  border-radius: 6px;
  font-weight: 500;
  -webkit-user-select: none;
  user-select: none;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.2s, box-shadow 0.2s;
  ${({ theme }) => theme.text.m};

  @media (hover: hover) {
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => `${theme.primary}75`};
    }
  }

  &:focus-visible {
    background-color: ${({ theme }) => `${theme.primary}55`};
    box-shadow: ${({ theme }) => `${theme.primary}75`} 0px 0px 0px 2px inset;
  }
`;
