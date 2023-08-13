import axios from "axios";
import { API_ENDPOINT } from "../helper/constant";

export const apiService = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});
