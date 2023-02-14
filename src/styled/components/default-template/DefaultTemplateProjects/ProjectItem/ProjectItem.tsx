import { Link } from "react-router-dom";

import { IconButton, Typography } from "components/core";
import type { Project } from "constants/projects";
import GithubIcon from "icons/GithubIcon";
import PinIcon from "icons/PinIcon";
import styled, { useTheme } from "styled-components";

import { ProjectItemExternalLink } from "./ProjectItemExternalLink";
import { ProjectItemTech } from "./ProjectItemTech";

export const ProjectItem = ({
  title,
  description,
  image,
  url,
  githubUrl,
  techs,
  isPinned
}: Project) => {
  const { primary } = useTheme();

  return (
    <Wrapper className="animate-hidden">
      {isPinned && (
        <PinIconWrapper>
          <PinIcon />
        </PinIconWrapper>
      )}
      <LinkElement to={url} target="_blank" rel="noopener noreferrer">
        <ImageWrapper>
          <Image alt={title} src={image} loading="lazy" draggable="false" />
        </ImageWrapper>
        <ProjectItemExternalLink />
      </LinkElement>
      <Content>
        {isPinned && (
          <Typography size="l" customColor={primary} weight={700}>
            Pinned
          </Typography>
        )}
        <Typography size="xl">{title}</Typography>
        <Typography color="secondary">{description}</Typography>
        <BottomRow>
          <ProjectTechs>
            {techs.map((projectTech) => (
              <ProjectItemTech key={projectTech.tech} {...projectTech} />
            ))}
          </ProjectTechs>
          {githubUrl && (
            <Link to={githubUrl} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
              <IconButton title="GitHub Repository">
                <GithubIcon />
              </IconButton>
            </Link>
          )}
        </BottomRow>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 10px;
`;

const PinIconWrapper = styled.div`
  position: absolute;
  top: -8px;
  left: -8px;
  color: ${({ theme }) => theme.primary};
  z-index: 5;
  pointer-events: none;

  & > svg {
    width: 24px;
    height: 24px;
    transform: rotate(270deg);
  }
`;

const LinkElement = styled(Link)`
  position: relative;
  width: 100%;

  @media (hover: hover) {
    &:hover > button {
      opacity: 1;
      transform: none;
      pointer-events: all;
      visibility: visible;
    }
  }

  &:focus-visible > button {
    opacity: 1;
    transform: none;
    pointer-events: all;
    visibility: visible;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 100%;
  padding-bottom: calc(100% + 50px);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 7px ${({ theme }) => theme.background2};
  transition: opacity 0.3s, box-shadow 0.2s;

  @media (hover: hover) {
    ${Wrapper}:hover & {
      opacity: 0.5;
    }
  }

  ${LinkElement}:focus-visible & {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.primary};
  }
`;

const Image = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  user-select: none;
  -webkit-user-select: none;
  transition: transform 0.3s;

  @media (hover: hover) {
    ${Wrapper}:hover & {
      transform: scale(1.015);
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  white-space: pre-line;
`;

const BottomRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  gap: 12px;

  & > a {
    margin-top: -5px;
  }
`;

const ProjectTechs = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;
