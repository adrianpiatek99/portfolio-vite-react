import styled from "styled-components";

export const DefaultTemplateBackground = () => {
  return <Background />;
};

const Background = styled.div`
  position: absolute;
  inset: 0px;
  max-height: 67vh;
  background-image: ${({
    theme
  }) => `radial-gradient(circle at center, ${theme.gray}35 1px, transparent 0),
    radial-gradient(circle at center, ${theme.gray}35 1px, transparent 0)`};
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    height: 50px;
    background: ${({ theme }) =>
      `linear-gradient(to bottom, ${theme.background1} 0%, transparent 50%)`};
  }

  &::after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 500px;
    background: ${({ theme }) => `linear-gradient(0deg, ${theme.background1} 0%, transparent 65%)`};
  }
`;
