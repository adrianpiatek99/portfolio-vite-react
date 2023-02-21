import { Footer } from "shared/Footer";
import { Header } from "shared/Header";

import { DefaultTemplateAboutMe } from "./DefaultTemplateAboutMe";
import { DefaultTemplateBackground } from "./DefaultTemplateBackground";
import { DefaultTemplateContact } from "./DefaultTemplateContact";
import { DefaultTemplateProjects } from "./DefaultTemplateProjects";

export const DefaultTemplate = () => {
  return (
    <main className="relative flex flex-col">
      <Header />
      <div className="flex flex-col max-w-[1240px] w-full mx-auto p-[30px]">
        <DefaultTemplateBackground />
        <DefaultTemplateAboutMe />
        <DefaultTemplateProjects />
        <DefaultTemplateContact />
      </div>
      <Footer />
    </main>
  );
};
