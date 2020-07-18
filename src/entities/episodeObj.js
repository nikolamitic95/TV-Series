export class EpisodeObj {
    constructor(episodeApi) {
        this.id = episodeApi.id
        this.name = episodeApi.name
        this.image = episodeApi.image.medium
    }
}
