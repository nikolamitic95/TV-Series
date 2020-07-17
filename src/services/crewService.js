import { baseAPI } from '../shared/baseApi';
import { CrewObj } from '../entities/crewObj';

class CrewService {
    getCast(id) {
        return baseAPI.get(`shows/${id}/crew`)
        .then(data=>console.log(data))
            .then(response => response.data)
            .then(crew => {
                let newCrew = crew.map(cre => new CastObj(cre))
                return newCrew;
            })
            .catch(error => console.log(error))
    }
}

export const crewService = new CrewService();