export class AkaObj {
    constructor(akaApi) {
        this.name = akaApi.name
        this.country=akaApi.country.name
        this.timezone=akaApi.country.timezone
    }
}
