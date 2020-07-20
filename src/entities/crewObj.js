export class CrewObj {
    constructor(crewApi) {
        this.id = crewApi.person === null ? '' : crewApi.person.id
        this.name = crewApi.person === null ? 'no this person name' : crewApi.person.name
        this.type = crewApi.type === null ? 'no type' : crewApi.type
        this.image = crewApi.person.image === null ? '' : crewApi.person.image.medium
    }
}
