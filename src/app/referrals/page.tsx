import React from "react";
import type { Metadata } from "next";
import ReferralsAPI from "../api/referrals/api";
import type { Referral } from "./util/interfaces";
import ReferralCard from "./components/referralCard";

async function getData() {
  return await ReferralsAPI.getReferrals().then((response) => response.data);
}

export const metadata: Metadata = {
  title: "Andy Luu's Work Experience",
  description: "These are the companies that Andy has worked at.",
};

const Projects = async () => {
  const referrals: Referral[] = await getData();

  return (
    <section className="Projects flex grow">
      <div className="Projects-container flex w-full flex-col gap-8 p-20 xl:mx-auto xl:w-9/10">
        {referrals.map((referral) => (
          <ReferralCard
            key={referral._id.toString()}
            name={referral.name}
            link={referral.link}
            image={referral.image}
            benefits={referral.benefits}
            _id={referral._id}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
