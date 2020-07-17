import { baseAPI } from '../shared/baseApi';
import { SeasonObj } from '../entities/seasonObj';

class SeasonsService {
    getSeasons(id) {
        return baseAPI.get(`shows/${id}/seasons`)
            .then(response => response.data)
            .then(seasons => {
                let newSeasons = seasons.map(season => new SeasonObj(season))
                return newSeasons;
            })
            .catch(error => console.log(error))

    }
}

export const seasonsService = new SeasonsService();