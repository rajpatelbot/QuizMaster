import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_BACKEND_API || "http://192.168.0.107:8000/";

export const apiService = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});
