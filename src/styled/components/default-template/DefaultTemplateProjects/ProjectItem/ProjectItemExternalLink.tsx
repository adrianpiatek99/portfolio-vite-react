import ExternalLinkIcon from "icons/ExternalLinkIcon";
import styled from "styled-components";

export const ProjectItemExternalLink = () => {
  return (
    <ButtonElement>
      <ExternalLinkIcon />
    </ButtonElement>
  );
};

const ButtonElement = styled.button`
  position: absolute;
  top: -12px;
  right: -12px;
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 4px 7px ${({ theme }) => theme.background1};
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transform: translateY(10px) scale(0.95);
  transition: opacity 0.2s, transform 0.2s, visibility 0.2s;
  z-index: 2;
  cursor: pointer;

  & > svg {
    width: 20px;
    height: 20px;
  }
`;
