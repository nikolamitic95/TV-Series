export class CastObj {
    constructor(castApi) {
        this.id = castApi.person === null ? '' : castApi.person.id
        this.name = castApi.person.name === null || '' ? 'no this person name' : castApi.person.name
        this.character = castApi.character.name === null || '' ? 'no this character name' : castApi.character.name
        this.image = castApi.person.image === null ? '' : castApi.person.image.medium
    }
}
