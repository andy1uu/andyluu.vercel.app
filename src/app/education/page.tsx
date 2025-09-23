import React from "react";
import type { Metadata } from "next";
import EducationAPI from "../api/education/api";
import type { Education } from "./util/interfaces";
import EducationCard from "./components/educationCard";

async function getData() {
  return await EducationAPI.getEducation().then((response) => response.data);
}

export const metadata: Metadata = {
  title: "Andy Luu's Education",
  description: "These are the schools that Andy has graduated from.",
};

const Education = async () => {
  const education: Education[] = await getData();

  return (
    <section className="Education flex flex-grow">
      <div className="Education-container flex flex-col px-16 pt-16 w-full gap-4">
      {education.map((edu) => (
        <EducationCard
          key={edu._id.toString()}
          institution={edu.institution}
          degreeType={edu.degreeType}
          gpa={edu.gpa}
          location={edu.location}
          major={edu.major}
          courseWork={edu.courseWork}
          extracirriculars={edu.extracirriculars}
          endTime={edu.endTime}
          startTime={edu.startTime}
        />
      ))}
      </div>
    </section>
  );
};

export default Education;
