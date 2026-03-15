import baseAPI from "../api";

const getEducation = () => baseAPI.get("/education");

const EducationAPI = {
  getEducation,
};

export default EducationAPI;
