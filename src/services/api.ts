import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.request.use((request: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  request.headers = {
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Content-Type": "application/json;charset=UTF-8"
  };

  return request;
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data && response.data.status === "Token is Expired") {
      // TO-DO LOGOUT
    }

    return response;
  },
  (error: AxiosError) => {
    if (error.request && error.request.status === 401) {
      // TO-DO LOGOUT;
    }

    return Promise.reject(error);
  }
);

export default api;
