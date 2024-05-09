import axios from "axios";

const AXIOS = axios.create({
  baseURL: "http://127.0.0.1:8001/api",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

export { AXIOS };
