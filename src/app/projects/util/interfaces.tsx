import { ObjectId } from "mongodb";

export type Project = {
  _id: ObjectId;
  name: string;
  endDate: string;
  startDate: string;
  description: string[];
  contributors: string[];
  skills: string[];
};
