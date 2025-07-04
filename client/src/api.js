import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api", // backend URL
  withCredentials: false, // if not using cookies
});
