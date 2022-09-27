import axios from 'axios'

const API_URL = '/api/anime/'


const addAnime = async (animeData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, animeData, config)
    return response.data
}

const getUserAnime = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}

const addService = {
    addAnime,
    getUserAnime,
}

export default addService