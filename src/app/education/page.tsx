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
    <section className="Education flex grow">
      <div className="Education-container flex w-full flex-col gap-8 p-20 xl:mx-auto xl:w-9/10">
        <h1 className="Education-title text-center text-6xl font-bold">
          Education
        </h1>
        {education.map((edu) => (
          <EducationCard
            key={edu._id.toString()}
            institution={edu.institution}
            degreeType={edu.degreeType}
            gpa={edu.gpa}
            location={edu.location}
            major={edu.major}
            courseWork={edu.courseWork}
            activities={edu.activities}
            endDate={edu.endDate}
            startDate={edu.startDate}
            _id={edu._id}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
