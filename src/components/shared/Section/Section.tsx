import type { ReactElement } from "react";

import { Typography } from "components/core";

interface SectionProps {
  children: ReactElement | ReactElement[];
  id: string;
  headingText: string;
}

export const Section = ({ children, id, headingText }: SectionProps) => {
  return (
    <section id={id} className="flex flex-col">
      <div className="flex flex-col gap-[40px] w-full my-[84px] mx-auto sm:my-[124px] lg:flex-row">
        <div className="animate-hidden flex flex-col w-full h-full lg:sticky lg:top-[70px]">
          <Typography tag="h2" weight="semibold" className="text-5xl sm:text-7xl">
            {headingText}
          </Typography>
        </div>
        <div className="flex flex-col w-full gap-[30px] mt-[7px]">{children}</div>
      </div>
    </section>
  );
};
