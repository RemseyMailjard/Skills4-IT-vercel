import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://skillsbe-new.vercel.app/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    
  },
});

export default axiosInstance;
