import React from "react";
import { Project } from "../util/interfaces";

const ProjectCard: React.FC<Project> = ({
  name,
  endDate,
  startDate,
  description,
  contributors,
}: Project) => (
  <div className="flex gap-8 text-lg lg:justify-between">
    <div className="hidden w-1/5 lg:block">
      <p className="font-bold">
        {startDate} - {endDate}
      </p>
    </div>

    <div className="flex w-full flex-col gap-1 lg:w-4/5">
      <h2 className="text-primary text-2xl font-bold">{name}</h2>
      <p className="block lg:hidden">
        {startDate} - {endDate}
      </p>
      <ul className="text-md ml-4 w-full list-disc">
        {description.map((descriptor) => (
          <li className="w-full text-wrap" key={descriptor}>
            <p>{descriptor}</p>
          </li>
        ))}
      </ul>
      <h3 className="text-xl">Contributors</h3>
      <ul className="text-md ml-4 w-full list-disc">
        {contributors.map((contributor) => (
          <li className="w-full text-wrap" key={contributor}>
            <p>{contributor}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ProjectCard;
