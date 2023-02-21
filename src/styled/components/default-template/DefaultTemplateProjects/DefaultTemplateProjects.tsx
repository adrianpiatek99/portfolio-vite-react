import { projects } from "constants/projects";

import { ProjectItem } from "./ProjectItem";

export const DefaultTemplateProjects = () => {
  return (
    <section id="projects" className="flex flex-col">
      <div className="grid grid-cols-1 gap-[30px] w-full my-[84px] mx-auto sm:my-[124px] sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectItem key={project.title + project.url} {...project} />
        ))}
      </div>
    </section>
  );
};
