import { projects } from "constants/projects";
import styled from "styled-components";

import { ProjectItem } from "./ProjectItem";

export const DefaultTemplateProjects = () => {
  return (
    <ProjectsSection id="projects">
      <Content>
        {projects.map((project) => (
          <ProjectItem key={project.title + project.url} {...project} />
        ))}
      </Content>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  width: 100%;
  margin: 84px auto;

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 124px auto;
    grid-template-columns: repeat(2, 1fr);
  }
`;
