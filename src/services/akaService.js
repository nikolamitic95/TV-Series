import { baseAPI } from '../shared/baseApi';
import { AkaObj } from '../entities/akaObj';

class AkaService {
    getAka(id) {
        return baseAPI.get(`shows/${id}/akas`)
            .then(response => response.data)
            .then(akas => {
                let newAkas = akas.map(aka => new AkaObj(aka))
                return newAkas;
            })
            .catch(error => console.log(error))
    }
}

export const akaService = new AkaService();