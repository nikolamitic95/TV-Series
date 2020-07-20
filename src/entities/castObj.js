export class CastObj {
    constructor(castApi) {
        this.id = castApi.person ? castApi.person.id : ''
        this.name = castApi.person.name ? castApi.person.name : 'no this person name'
        this.character = castApi.character.name ? castApi.character.name : 'no this character name'
        this.image = castApi.person.image ? castApi.person.image.medium : ''
    }
}
