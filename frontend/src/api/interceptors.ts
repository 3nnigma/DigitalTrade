import { API_URL } from "@/lib/config";
import axios, { CreateAxiosDefaults } from "axios";
import Cookies from "js-cookie";
import { errorCatch } from "./error";

const getAccessToken = () => {
  const accessToken = Cookies.get("access");
  return accessToken || null;
};

const options: CreateAxiosDefaults = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const axiosDefault = axios.create(options);

const axiosAuth = axios.create(options);

axiosAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config?.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      error?.response?.status === 401 ||
      (errorCatch(error) === "Authentication credentials were not provided." &&
        error.config &&
        !error.config._isRetry)
    ) {
      originalRequest._isRetry = true;
      try {
        const refreshToken = Cookies.get("refresh");
        if (refreshToken) {
          await axiosDefault.post(`${API_URL}/jwt/refresh/`, {
            refresh: refreshToken,
          });
          return axiosAuth.request(originalRequest);
        }
      } catch (error) {
        if (
          errorCatch(error) === "Authentication credentials were not provided."
        ) {
          Cookies.remove("access");
          Cookies.remove("refresh");
        }
      }
    }
  },
);

export { axiosDefault, axiosAuth };
