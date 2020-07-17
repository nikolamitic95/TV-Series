import Axios from 'axios';

const baseAPI = Axios.create({
    baseURL: `http://api.tvmaze.com/`
})

export { baseAPI }