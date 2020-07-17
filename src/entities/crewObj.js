export class CrewObj {
    constructor(crewApi) {
        this.id = crewApi.person.id
        this.name = crewApi.person.name
        this.type = crewApi.type
        this.image = crewApi.person.image.medium
    }
}
