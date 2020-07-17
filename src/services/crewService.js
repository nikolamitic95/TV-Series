import { baseAPI } from '../shared/baseApi';
import { CrewObj } from '../entities/crewObj';

class CrewService {
    getCrew(id) {
        return baseAPI.get(`shows/${id}/crew`)
            .then(response => response.data)
            .then(crew => {
                let newCrew = crew.map(cre => new CrewObj(cre))
                return newCrew;
            })
            .catch(error => console.log(error))
    }
}

export const crewService = new CrewService();