import { baseAPI } from '../shared/baseApi';

class SearchService {
    search(str) {
        return baseAPI.get(`search/shows?q=${str}`)   
            .then(response => response)
            .catch(error => console.log(error))
    }
}

export const searchService = new SearchService();