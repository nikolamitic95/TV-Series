export class AkaObj {
    constructor(akaApi) {
        this.name = akaApi.name === null ? 'no this name' : akaApi.name
        this.country = akaApi.country === null ? 'no this country name' : akaApi.country.name
        this.timezone = akaApi.country === null ? 'no timezone' : akaApi.country.timezone
    }
}
