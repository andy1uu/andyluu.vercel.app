import React from "react";
import { Education } from "../util/interfaces";

const EducationCard: React.FC<Education> = ({
  institution,
  degreeType,
  gpa,
  location,
  major,
  activities,
  endDate,
  startDate,
}: Education) => (
  <div className="flex gap-8 text-lg lg:justify-between">
    <div className="hidden w-1/5 lg:block">
      <p className="font-bold">
        {startDate} - {endDate}
      </p>
    </div>

    <div className="flex w-full flex-col gap-1 lg:w-4/5">
      <h2 className="text-primary dark:text-tertiary text-2xl font-bold">
        {degreeType} in {major}
      </h2>
      <h3 className="text-xl">{institution}</h3>
      <p>{location}</p>
      <p className="block lg:hidden">
        {startDate} - {endDate}
      </p>
      <p className="text-md">GPA: {gpa.toFixed(2)}/4.00</p>
      <ul className="text-md ml-4 w-full list-disc">
        {activities.map((activity) => (
          <li className="w-full text-wrap" key={activity}>
            <p>{activity}</p>
          </li>
        ))}
      </ul>
      {/*
      <div className="my-2 flex w-full flex-wrap gap-2">
        {skills.map((skill) => (
          <Chip key={skill} text={skill} />
        ))}
      </div> */}
    </div>
  </div>
);

export default EducationCard;
