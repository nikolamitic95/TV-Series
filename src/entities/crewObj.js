export class CrewObj {
    constructor(crewApi) {
        this.id = crewApi.person ? crewApi.person.id : ''
        this.name = crewApi.person ?  crewApi.person.name : 'no this person name'
        this.type = crewApi.type ?  crewApi.type : 'no type' 
        this.image = crewApi.person.image ? crewApi.person.image.medium : ''
    }
}
