import { ObjectId } from "mongodb";

type Course = {
  name: string;
  professor: string;
};

type CourseWork = {
  semester: string;
  courses: Course[];
};

export type Education = {
  _id: ObjectId;
  institution: string;
  degreeType: string;
  gpa: number;
  location: string;
  major: string;
  courseWork: CourseWork[];
  activities: string[];
  endDate: string;
  startDate: string;
};
