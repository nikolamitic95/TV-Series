import { baseAPI } from '../shared/baseApi';
import { EpisodeObj } from '../entities/episodeObj';

class EpisodesService {
    getEpisodes(id) {
        return baseAPI.get(`seasons/${id}/episodes`)
           
            .then(response => response.data)
            .then(episodes => {
                let newEpisodes = episodes.map(episode => new EpisodeObj(episode))
                return newEpisodes;
            })
            .catch(error => console.log(error))
    }
}

export const episodesService = new EpisodesService();