import axios from "axios";

const API_URL = "/api/anime/";

const addAnime = async (mal_id, currentStatus, episode, score, start, end, rewatch, notes, username, currentAnime, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


  const response = await axios.post(API_URL, {mal_id, currentStatus, episode, score, start, end, rewatch, notes, username, currentAnime}, config);
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

const getOtherAnime = async (username) => {
  let usernames = username['username']
  const response = await axios.post(API_URL + 'profiles', {usernames})
  // /api/anime/profiles
  return response.data
}

const removeAnime = async (animeId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + animeId, config);
  return response.data;
};

const editAnime = async (id, currentStatus, episode, score, start, end, rewatch, notes, currentAnime, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + id,{currentStatus, episode, score, start, end, rewatch, notes, currentAnime}, config);
  return response.data;
};

const addService = {
  addAnime,
  getUserAnime,
  removeAnime,
  editAnime,
  getOtherAnime,
};

export default addService;
