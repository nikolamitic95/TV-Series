export class EpisodeObj {
    constructor(episodeApi) {
        this.id = episodeApi === null ? '' : episodeApi.id
        this.name = episodeApi.name === null || '' ? 'no this episode name' : episodeApi.name
        this.image = episodeApi.image === null ? '' : episodeApi.image.medium
    }
}
