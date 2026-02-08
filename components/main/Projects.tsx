import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { PROJECTS } from "@/constants";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
        My Achievements
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {PROJECTS.map((project) => (
          <a key={project.title} href={project.download} download className="z-[50] cursor-pointer hover:scale-[1.02] transition-transform flex-1">
            <ProjectCard
              src={project.image}
              title={project.title}
              description={project.description}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
