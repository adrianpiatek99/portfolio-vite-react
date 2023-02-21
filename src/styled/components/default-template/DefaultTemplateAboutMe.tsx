import { Link } from "react-router-dom";

import { IconButton, Typography } from "components/core";
import { GITHUB_URL } from "constants/links";
import GithubIcon from "icons/GithubIcon";

export const DefaultTemplateAboutMe = () => {
  return (
    <section id="about-me" className="animate-hidden flex flex-col min-h-[65vh]">
      <div className="flex flex-col gap-[30px] w-full mx-auto my-[84px] sm:my-[124px] lg:flex-row">
        <div className="flex flex-col w-full h-full lg:sticky lg:top-[70px]">
          <Typography tag="h2" weight="semibold" className="text-5xl sm:text-7xl">
            Adrian Piątek
          </Typography>
        </div>
        <div className="flex flex-col w-full gap-[30px]">
          <Typography
            tag="p"
            weight="semibold"
            color="secondary"
            className="text-primary text-xl sm:text-2xl"
          >
            Junior React Developer
          </Typography>
          <Typography tag="p" color="secondary" className="text-color2 text-l sm:text-xl">
            Hello and welcome to my portfolio.
          </Typography>
          <div className="flex gap-[12px]">
            <Link to={GITHUB_URL} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
              <IconButton title="GitHub" size="large">
                <GithubIcon />
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
