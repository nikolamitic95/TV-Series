export class ShowObj {
    constructor(showApi) {
        this.id = showApi.id
        this.name = showApi.name
        this.avatar = showApi.image.medium
        this.avatarInfo = showApi.image.original
        this.rating = showApi.rating.average
        this.summary = showApi.summary
    }
}

