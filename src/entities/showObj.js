export class ShowObj {
    constructor(showApi) {
        this.id = showApi === null ? '' : showApi.id
        this.name = showApi === null || '' ? 'No Name' : showApi.name
        this.avatar = showApi.image === null ? '' : showApi.image.medium
        this.avatarInfo = showApi.image === null ? '' : showApi.image.original
        this.rating = showApi.rating === null ? '' : showApi.rating.average
        this.summary = showApi.summary === '' ? 'No summary on this series...' : showApi.summary
    }
}

