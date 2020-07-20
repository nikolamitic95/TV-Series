import Axios from 'axios';

const SHOW_ENDPOINT = `https://api.tvmaze.com`;

const baseAPI = Axios.create({
    baseURL: `${SHOW_ENDPOINT}/`
})

export { baseAPI }