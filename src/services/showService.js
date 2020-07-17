import { baseAPI } from '../shared/baseApi';
import { ShowObj } from '../entities/showObj';

class ShowService {
    getShows() {
        return baseAPI.get(`shows`)
            .then(response => response.data)
            .then(shows => {
                let newShows = shows.map(show => new ShowObj(show))
                return newShows;
            })
            .catch(error => console.log(error))
    }

    getSingleShow(id) {
        return baseAPI.get(`shows/${id}`)
            .then(response => response.data)
            .then(singleShow =>  new ShowObj(singleShow))
            .catch(error => console.log(error))
    }
}

export const showService = new ShowService();