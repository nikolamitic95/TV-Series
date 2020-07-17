export class CastObj {
    constructor(castApi) {
        this.id = castApi.person.id
        this.name = castApi.person.name
        this.character = castApi.character.name
        this.image = castApi.person.image.medium
    }
}
