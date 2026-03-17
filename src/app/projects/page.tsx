import React from "react";
import type { Metadata } from "next";
import ProjectsAPI from "../api/projects/api";
import type { Project } from "./util/interfaces";
import ProjectCard from "./components/projectCard";

async function getData() {
  return await ProjectsAPI.getProjects().then((response) => response.data);
}

export const metadata: Metadata = {
  title: "Andy Luu's Work Experience",
  description: "These are the companies that Andy has worked at.",
};

const Projects = async () => {
  const projects: Project[] = await getData();

  return (
    <section className="Projects flex grow">
      <div className="Projects-container flex w-full flex-col gap-8 p-20 xl:mx-auto xl:w-9/10">
        {projects.map((project) => (
          <ProjectCard
            key={project._id.toString()}
            name={project.name}
            endDate={project.endDate}
            startDate={project.startDate}
            description={project.description}
            contributors={project.contributors}
            _id={project._id}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
