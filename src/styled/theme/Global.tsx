import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
   background-color: ${({ theme }) => theme.background1};
   color: ${({ theme }) => theme.color1};
   ${({ theme }) => theme.fontFamily};
  }

  span {
    ${({ theme }) => theme.fontFamily};
  }

  h1,
  h2,
  h3,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    ${({ theme }) => theme.fontFamily};
  }

  button {
    margin: 0;
    border: none;
    outline: none;
    background-color: transparent;
  }

  input,
  textarea {
    outline: none;
    border: none;
    margin: 0;
    ${({ theme }) => theme.fontFamily};
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
    width: max-content;

    @media (hover: hover) {
      &:hover:not(:disabled){
        text-decoration: none;
      }
    }

    &:focus-visible {
      text-decoration: none;
    }
  }

  li {
    list-style: none;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 50px;
    border: 3px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    background-color: ${({ theme }) => `${theme.gray}35`};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => `${theme.gray}45`};
  }

  &::-webkit-scrollbar-thumb:active {
    border: 2px solid rgba(0, 0, 0, 0);
  }

  span.ripple {
    position: absolute;
    display: block;
    border-radius: 50%;
    transform: scale(0);
    background-color: currentColor;
    opacity: 0.5;
    animation: ripple 0.35s linear;
    z-index: 0;
  }

  @keyframes ripple {
    to {
      transform: scale(3);
      opacity: 0;
    }
  }
`;
