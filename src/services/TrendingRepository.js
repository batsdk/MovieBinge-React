import axios from "./axiosConfig";

export const getTrendingToday = () => {
  return axios.get(`/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}`);
};
