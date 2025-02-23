import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "https://api-2qzi.onrender.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,  // Ensures cookies and credentials are sent
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
