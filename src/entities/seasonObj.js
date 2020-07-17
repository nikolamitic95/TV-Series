export class SeasonObj {
    constructor(seasonApi) {
        this.id = seasonApi.id
        this.premiereDate = seasonApi.premiereDate
        this.endDate = seasonApi.endDate
        this.episode = seasonApi.episodeOrder
        this.image = seasonApi.image.medium
    }
}
