import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/core/todo/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
