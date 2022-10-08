// https://api.jikan.moe/v4/anime/{id}/characters

import axios from "axios";

const BASE_URL = "https://api.jikan.moe/v4/anime/";
const get = async (id) => {
  const response = await axios.get(BASE_URL + id + '/characters');
  return response.data.data
};

const characterService = {
  get,
};

export default characterService;
