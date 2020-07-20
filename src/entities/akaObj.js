export class AkaObj {
    constructor(akaApi) {
        this.id= akaApi.id ? akaApi.id : ''
        this.name = akaApi.name ? akaApi.name : 'no this name'
        this.country = akaApi.country ? akaApi.country.name : 'no this country name'
        this.timezone = akaApi.country ? akaApi.country.timezone : 'no timezone'
    }
}
