export class EpisodeObj {
    constructor(episodeApi) {
        this.id = episodeApi ? episodeApi.id : ''
        this.name = episodeApi.name ? episodeApi.name : 'no this episode name'
        this.image = episodeApi.image ? episodeApi.image.medium : ''
    }
}
