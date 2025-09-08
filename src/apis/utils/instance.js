import axios from "axios";

const API_BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:8080" : "/api";

export const instance = axios.create({
  baseURL: API_BASE_URL,
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
