export class ShowObj {
    constructor(showApi) {
        this.id = showApi ? showApi.id : ''
        this.name = showApi ?  showApi.name : 'No Name' 
        this.avatar = showApi.image ? showApi.image.medium : ''
        this.avatarInfo = showApi.image ? showApi.image.original : ''
        this.rating = showApi.rating ? showApi.rating.average : ''
        this.summary = showApi.summary === '' ? 'No summary on this series...' : showApi.summary
    }
}

