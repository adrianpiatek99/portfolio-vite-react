import { Link } from "react-router-dom";

import { IconButton, Typography } from "components/core";
import { GITHUB_URL } from "constants/links";
import GithubIcon from "icons/GithubIcon";
import { Section } from "shared/Section";

export const DefaultAboutMeSection = () => {
  return (
    <Section id="about-me" headingText="Adrian Piątek">
      <div className="animate-hidden flex flex-col w-full gap-[30px] max-w-[650px]">
        <Typography tag="p" weight="semibold" className="text-primary text-xl sm:text-2xl">
          Junior React Developer
        </Typography>
        <Typography tag="p" className="text-color2 text-l sm:text-xl whitespace-pre-line">
          {
            "Hello and welcome to my portfolio! \n Passionate about web development and a bit of design. My journey in this direction started at the turn of 2020 and 2021."
          }
        </Typography>
        <div className="flex gap-[12px]">
          <Link to={GITHUB_URL} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
            <IconButton title="GitHub" size="large">
              <GithubIcon />
            </IconButton>
          </Link>
        </div>
      </div>
    </Section>
  );
};
