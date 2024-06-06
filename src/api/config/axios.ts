import Axios from "axios";

const production = "https://cards-marketplace-api.onrender.com/";

const axios = Axios.create({
  baseURL: production,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axios;
