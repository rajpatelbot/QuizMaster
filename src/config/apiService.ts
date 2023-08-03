import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_BACKEND_API || "http://localhost:8000/";

export const apiService = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

apiService.interceptors.request.use((config) => {  
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});
