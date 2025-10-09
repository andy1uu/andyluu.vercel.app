import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

export default setupCache(
  axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      "Content-Type": "application/json",
      API_KEY: process.env.REACT_APP_API_KEY,
    },
  }),
);
