import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3333/v1/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
