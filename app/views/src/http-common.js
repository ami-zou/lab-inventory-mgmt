import axios from "axios";
require("dotenv");

export default axios.create({
  baseURL: process.env.HOST_URL,
  headers: {
    "Content-type": "application/json",
  },
});
