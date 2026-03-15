import React from "react";
import { Experience } from "../util/interfaces";
import Chip from "@/components/Chip";

const ExperienceCard: React.FC<Experience> = ({
  company,
  title,
  location,
  endDate,
  startDate,
  responsibilities,
  skills,
}: Experience) => (
  <div className="flex gap-8 text-lg lg:justify-between">
    <div className="hidden w-1/5 lg:block">
      <p className="font-bold">
        {startDate} - {endDate}
      </p>
    </div>

    <div className="flex w-full flex-col gap-1 lg:w-4/5">
      <h2 className="text-primary text-2xl font-bold">{title}</h2>
      <h3 className="text-xl">{company}</h3>
      <p>{location}</p>
      <p className="block lg:hidden">
        {startDate} - {endDate}
      </p>
      <ul className="text-md ml-4 w-full list-disc">
        {responsibilities.map((responsibility) => (
          <li className="w-full text-wrap" key={responsibility}>
            <p>{responsibility}</p>
          </li>
        ))}
      </ul>
      <div className="my-2 flex w-full flex-wrap gap-2">
        {skills.map((skill) => (
          <Chip key={skill} text={skill} />
        ))}
      </div>
    </div>
  </div>
);

export default ExperienceCard;
