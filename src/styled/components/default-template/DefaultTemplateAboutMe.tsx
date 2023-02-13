import { Link } from "react-router-dom";

import { IconButton, Typography } from "components/core";
import { GITHUB_URL } from "constants/links";
import GithubIcon from "icons/GithubIcon";
import styled, { useTheme } from "styled-components";

export const DefaultTemplateAboutMe = () => {
  const { primary } = useTheme();

  return (
    <AboutMeSection id="about-me" className="animate-hidden">
      <Content>
        <ContentLeft>
          <Typography heading tag="h2" weight={600} size="xxl" mobileSize="l">
            Adrian Piątek
          </Typography>
        </ContentLeft>
        <ContentRight>
          <Typography
            tag="p"
            weight={600}
            color="secondary"
            size="xxl"
            mobileSize="xl"
            customColor={primary}
          >
            Junior React Developer
          </Typography>
          <Typography tag="p" color="secondary" size="xl" mobileSize="l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veritatis cumque natus
            minima? Hic similique ipsam dicta molestias quibusdam rem vero nisi facere nulla, eaque
            quidem blanditiis laborum deleniti mollitia!
          </Typography>
          <IconsGroup>
            <Link to={GITHUB_URL} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
              <IconButton title="GitHub" size="large">
                <GithubIcon />
              </IconButton>
            </Link>
          </IconsGroup>
        </ContentRight>
      </Content>
    </AboutMeSection>
  );
};

const AboutMeSection = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 65vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
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

const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`;

const IconsGroup = styled.div`
  display: flex;
  gap: 12px;
`;
