export class SeasonObj {
    constructor(seasonApi) {
        this.id = seasonApi === null ? '' : seasonApi.id
        this.premiereDate = seasonApi.premiereDate === null ? 'no premiere date' : seasonApi.premiereDate
        this.endDate = seasonApi.endDate === null ? 'no end date' : seasonApi.endDate
        this.image = seasonApi.image === null ? '' : seasonApi.image.medium
    }
}
