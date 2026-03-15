import React from "react";
import { Referral } from "../util/interfaces";
import Image from "next/image";

const ReferralCard: React.FC<Referral> = ({
  name,
  link,
  image,
  benefits,
}: Referral) => (
  <div className="flex w-full flex-col gap-8 text-lg lg:flex-row">
    <Image
      className="lg:w-1/4"
      src={`/${image}`}
      alt={name}
      width={300}
      height={189}
    />
    <div className="flex flex-col gap-2 lg:w-3/4">
      <h2 className="text-primary dark:text-tertiary text-2xl font-bold">
        {name}
      </h2>
      <h3 className="text-xl">
        Referral Link: <a href={link}>{link}</a>
      </h3>
      <ul className="text-md ml-4 w-full list-disc">
        {benefits.map((benefit) => (
          <li className="w-full text-wrap" key={benefit}>
            <p>{benefit}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ReferralCard;
