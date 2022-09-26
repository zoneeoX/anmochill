import axios from "axios";

const BASE_URL = "https://api.jikan.moe/v4/anime/";

const get = async (id) => {
  const response = await axios.get(BASE_URL + id);
  return response.data.data
};

const searchIdService = {
  get,
};

export default searchIdService;
