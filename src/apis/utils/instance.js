import axios from "axios"

export const instance = axios.create({
    baseURL: "http://localhost:8080"
})

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});