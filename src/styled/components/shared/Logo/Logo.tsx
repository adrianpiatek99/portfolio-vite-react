import styled from "styled-components";

export const Logo = () => {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });

  return (
    <ButtonElement onClick={scrollToTop}>
      <span>Portfolio</span>
    </ButtonElement>
  );
};

const ButtonElement = styled.button`
  color: ${({ theme }) => theme.color1};
  font-weight: 700;
  cursor: pointer;
  ${({ theme }) => theme.heading.xs};

  @media (hover: hover) {
    &:hover:not(:disabled) {
      color: ${({ theme }) => theme.primary};
    }
  }

  &:focus-visible {
    color: ${({ theme }) => theme.primary};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    ${({ theme }) => theme.heading.s};
  }
`;
