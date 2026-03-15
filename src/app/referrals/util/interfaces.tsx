import { ObjectId } from "mongodb";

export type Referral = {
  _id: ObjectId;
  name: string;
  link: string;
  image: string;
  benefits: string[];
};
