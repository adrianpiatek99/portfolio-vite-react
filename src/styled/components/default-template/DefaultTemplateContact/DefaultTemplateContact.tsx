import { CopyToClipboard } from "react-copy-to-clipboard";

import { Typography } from "components/core";
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "constants/links";
import GithubIcon from "icons/GithubIcon";
import LinkedinIcon from "icons/LinkedinIcon";
import MailIcon from "icons/MailIcon";
import styled from "styled-components";

import { DefaultTemplateContactItem } from "./DefaultTemplateContactItem";

export const DefaultTemplateContact = () => {
  return (
    <ContactSection id="contact">
      <Content>
        <ContentLeft>
          <Typography heading tag="h2" weight={600} size="xxl" mobileSize="l">
            Contact
          </Typography>
        </ContentLeft>
        <ContentRight>
          <CopyToClipboard text={EMAIL_ADDRESS}>
            <DefaultTemplateContactItem
              icon={<MailIcon />}
              title="Email address"
              text={EMAIL_ADDRESS}
              buttonText="Copy to clipboard"
            />
          </CopyToClipboard>
          <DefaultTemplateContactItem
            icon={<LinkedinIcon />}
            title="LinkedIn"
            href={LINKEDIN_URL}
          />
          <DefaultTemplateContactItem icon={<GithubIcon />} title="GitHub" href={GITHUB_URL} />
        </ContentRight>
      </Content>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  margin: 84px auto;

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 124px auto;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    flex-direction: row;
  }
`;

const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media ${({ theme }) => theme.breakpoints.lg} {
    position: sticky;
    top: 70px;
  }
`;

const ContentRight = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 60px;
  margin-top: 7px;
`;
