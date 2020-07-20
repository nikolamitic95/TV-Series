export class SeasonObj {
    constructor(seasonApi) {
        this.id = seasonApi ? seasonApi.id : ''
        this.premiereDate = seasonApi.premiereDate ?  seasonApi.premiereDate : 'no premiere date' 
        this.endDate = seasonApi.endDate ? seasonApi.endDate : 'no end date'
        this.image = seasonApi.image ? seasonApi.image.medium : ''
    }
}
