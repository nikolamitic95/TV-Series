import { baseAPI } from '../shared/baseApi';
import { CastObj } from '../entities/castObj';

class CastService {
    getCast(id) {
        return baseAPI.get(`shows/${id}/cast`)
            .then(response => response.data)
            .then(cast => {
                let newCast = cast.map(cas => new CastObj(cas))
                return newCast;
            })
            .catch(error => console.log(error))
    }
}

export const castService = new CastService();