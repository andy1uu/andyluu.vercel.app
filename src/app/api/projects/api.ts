import baseAPI from "../api";

const getProjects = () => baseAPI.get("/projects");

const ProjectsAPI = {
  getProjects,
};

export default ProjectsAPI;
