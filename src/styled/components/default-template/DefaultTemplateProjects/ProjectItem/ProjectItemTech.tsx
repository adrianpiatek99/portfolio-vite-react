import { Typography } from "components/core";
import type { ProjectTech } from "constants/projects";
import styled from "styled-components";

export const ProjectItemTech = ({ tech, icon: Icon }: ProjectTech) => {
  return (
    <TechItem>
      <Icon />
      <Typography size="xs" truncate>
        {tech}
      </Typography>
    </TechItem>
  );
};

const TechItem = styled.li`
  display: flex;
  gap: 6px;
  align-items: center;
  min-width: 0px;
  background-color: ${({ theme }) => theme.primary}70;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: default;

  & > svg {
    width: 14px;
    height: 14px;
  }
`;
