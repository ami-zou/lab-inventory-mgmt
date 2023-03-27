import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_SERVER_HOST_URL,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
  withCredentials: true,
});
