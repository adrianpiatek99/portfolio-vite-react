import { CopyToClipboard } from "react-copy-to-clipboard";

import { Typography } from "components/core";
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "constants/links";
import GithubIcon from "icons/GithubIcon";
import LinkedinIcon from "icons/LinkedinIcon";
import MailIcon from "icons/MailIcon";

import { DefaultTemplateContactItem } from "./DefaultTemplateContactItem";

export const DefaultTemplateContact = () => {
  return (
    <section id="contact" className="flex flex-col">
      <div className="flex flex-col gap-[40px] w-full my-[84px] mx-auto sm:my-[124px] lg:flex-row">
        <div className="animate-hidden flex flex-col w-full h-full lg:sticky lg:top-[70px]">
          <Typography heading tag="h2" weight="semibold" className="text-5xl sm:text-7xl">
            Contact
          </Typography>
        </div>
        <div className="flex flex-col w-full gap-[60px] mt-[7px]">
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
        </div>
      </div>
    </section>
  );
};
