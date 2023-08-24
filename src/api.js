import axios from "axios";
import { logout } from "./shared/utils/auth";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 2000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");
    if (userDetails) {
      const token = JSON.parse(userDetails).userDetails.token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);
// public routes
export const login = async (data) => {
  try {
    console.log(data);
    return await apiClient.post("/auth/login", data);
  } catch (errorException) {
    return {
      error: true,
      errorException,
    };
  }
};
export const register = async (data) => {
  try {
    console.log(data);
    return await apiClient.post("/auth/register", data);
  } catch (errorException) {
    return {
      error: true,
      errorException,
    };
  }
};
// secure routes

export const sendFriendInvitation = async (data) => {
  try {
    return await apiClient.post("/friend-invitation/invite", data);
  } catch (errorException) {
    checkResponseCode(errorException);
    return {
      error: true,
      errorException,
    };
  }
};

export const acceptFriendInvitation = async (data) => {
  try {
    return await apiClient.post("/friend-invitation/accept", data);
  } catch (errorException) {
    checkResponseCode(errorException);
    return {
      error: true,
      errorException,
    };
  }
};
export const rejectFriendInvitation = async (data) => {
  try {
    return await apiClient.post("/friend-invitation/reject", data);
  } catch (errorException) {
    checkResponseCode(errorException);
    return {
      error: true,
      errorException,
    };
  }
};

export const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;
  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
