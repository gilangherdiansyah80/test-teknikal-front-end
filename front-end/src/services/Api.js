import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co",
  headers: {
    "Content-Type": "application/json",
  },
});

const ApiServices = {
  get: async (url, config = {}) => {
    try {
      const response = await api.get(url, config);
      return response;
    } catch (err) {
      console.log(err);
    }
  },
};

export default ApiServices;
