import baseAPI from "../api";

const getExperience = () => baseAPI.get("/experience");

const ExperienceAPI = {
  getExperience,
};

export default ExperienceAPI;
