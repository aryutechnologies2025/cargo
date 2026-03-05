


import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import CryptoJS from "crypto-js";
import { API_URL } from "./api";
import {SECRET_KEY } from "./secretKey";

// Decryption function
const decryptData = <T = any>(encryptedData: string): T => {
  try {
 

    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    const decryptedString = bytes.toString(CryptoJS.enc.Utf8);

    if (!decryptedString) {
      throw new Error("Decryption failed - empty result");
    }

    return JSON.parse(decryptedString) as T;
  } catch (error) {
    console.error("Decryption error:", error);
    throw error;
  }
};

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

//  Request Interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("admin_token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

//  Response Interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {

    if (response.data) {
      // Case 1: encrypted flag
      if (response.data.encrypted === true) {
        try {
          const decryptedData = decryptData(response.data.data);
          response.data = decryptedData;
        } catch (error) {
          console.error("Decryption failed:", error);
        }
      }

      // Case 2: encoded flag
      else if (response.data.encoded === true) {
        try {
          const decryptedData = decryptData(response.data.data);
          response.data = decryptedData;
        } catch (error) {
          console.error("Decryption failed:", error);
        }
      }

      // Case 3: CryptoJS salted string check
      else if (
        response.data.data &&
        typeof response.data.data === "string" &&
        response.data.data.startsWith("U2FsdGVkX1")
      ) {
        try {
          const decryptedData = decryptData(response.data.data);
          response.data = decryptedData;
        } catch (error) {
          console.error("Decryption failed:", error);
        }
      }
    }

    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("admin_token_expires");
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;