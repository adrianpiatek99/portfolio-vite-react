import type { ReactNode } from "react";

import { Button, CustomLink, Typography } from "components/core";
import ExternalLinkIcon from "icons/ExternalLinkIcon";
import styled from "styled-components";

interface DefaultTemplateContactItemProps {
  icon: ReactNode;
  title: string;
  text?: string;
  href?: string;
  buttonText?: string;
  onClick?: () => void;
}

export const DefaultTemplateContactItem = ({
  icon,
  title,
  text,
  href,
  buttonText,
  onClick
}: DefaultTemplateContactItemProps) => {
  return (
    <Wrapper>
      <LeftColumn>{icon}</LeftColumn>
      <RightColumn>
        <Typography size="xxl" mobileSize="xl" weight={500}>
          {title}
        </Typography>
        {text && (
          <Typography size="l" mobileSize="m" color="secondary">
            {text}
          </Typography>
        )}
        {onClick && <Button onClick={onClick}>{buttonText}</Button>}
        {href && (
          <CustomLink
            href={href}
            icon={<ExternalLinkIcon />}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit page
          </CustomLink>
        )}
      </RightColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 30px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    gap: 40px;
  }
`;

const LeftColumn = styled.div`
  display: flex;

  & > svg {
    height: 40px;
    width: 40px;
    color: ${({ theme }) => theme.color2}80;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
