import React from "react";
import { Experience } from "../util/interfaces";
import Chip from "@/components/Chip";

const ExperienceCard: React.FC<Experience> = ({
  company,
  title,
  location,
  endTime,
  startTime,
  responsibilities,
  skills,
}: Experience) => (
  <div className="flex gap-8 lg:justify-between text-lg">
    {/*     <img
      className="w-16 rounded-md mr-auto md:mr-0 md:mb-auto"
      src={`${company}.jpg`}
      alt={company}
    /> */}
    <div className="hidden lg:block w-1/5">
      <p className="font-bold">
        {startTime} - {endTime}
      </p>
    </div>

    <div className="w-full lg:w-4/5 flex flex-col gap-1">
      <h2 className="font-bold text-2xl text-primary dark:text-tertiary">
        {title}
      </h2>
      <h3 className="text-xl">{company}</h3>
      <p>{location}</p>
      <p className="lg:hidden block">
        {startTime} - {endTime}
      </p>
      <ul className="w-full list-disc ml-4 text-md">
        {responsibilities.map((responsibility) => (
          <li className="w-full text-wrap" key={responsibility}>
            <p>{responsibility}</p>
          </li>
        ))}
      </ul>
      <div className="w-full flex gap-2 my-2 flex-wrap">
        {skills.map((skill) => (
          <Chip key={skill} text={skill} />
        ))}
      </div>
    </div>
  </div>
);

export default ExperienceCard;
