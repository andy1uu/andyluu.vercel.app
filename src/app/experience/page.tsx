import React from "react";
import type { Metadata } from "next";
import ExperienceAPI from "../api/experience/api";
import type { Experience } from "./util/interfaces";
import ExperienceCard from "./components/experienceCard";

async function getData() {
  return await ExperienceAPI.getExperience().then((response) => response.data);
}

export const metadata: Metadata = {
  title: "Andy Luu's Work Experience",
  description: "These are the companies that Andy has worked at.",
};

const Experience = async () => {
  const experiences: Experience[] = await getData();

  return (
    <section className="Experience flex grow">
      <div className="Experience-container flex w-full flex-col gap-8 p-20 xl:mx-auto xl:w-9/10">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience._id.toString()}
            company={experience.company}
            title={experience.title}
            location={experience.location}
            endDate={experience.endDate}
            startDate={experience.startDate}
            responsibilities={experience.responsibilities}
            skills={experience.skills}
            _id={experience._id}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
