import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4143126601494438932fe1d19bdb6fbd",
  },
});