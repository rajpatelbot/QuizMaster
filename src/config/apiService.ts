import axios from "axios";
import Cookies from "js-cookie";
import { API_ENDPOINT } from "../helper/constant";

export const apiService = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

apiService.interceptors.request.use((config) => {
  const token = Cookies.get("token");

  if (token) {
    config.headers["cookies"] = token;
  }
  return config;
});
