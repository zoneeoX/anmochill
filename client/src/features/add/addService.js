import axios from "axios";

const API_URL = "/api/anime/";

const addAnime = async (status, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, status, config);
  return response.data;
};

const getUserAnime = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

const removeAnime = async (animeId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + animeId, config);
  return response.data;
};

const editAnime = async (animeId, body, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + animeId, body, config);
  return response.data;
};

const addService = {
  addAnime,
  getUserAnime,
  removeAnime,
  editAnime,
};

export default addService;
