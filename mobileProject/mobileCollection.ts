// Class mobileCollection

import { Mobile } from "./mobile";

export class mobileCollection {

    private mobiles:Mobile[]
    private totalPrice:number

    constructor(mobiles:Mobile[]) {
        this.mobiles = mobiles
        this.totalPrice
    }

    // getters

    getMobiles():Mobile[] {
        return this.mobiles
    }

    getTotalPrice():number {
        return this.totalPrice
    }

    // setters

    setMobiles(mobiles:Mobile[]) {
        this.mobiles = mobiles
    }

    setTotalPrice(price:number) {
        this.totalPrice = price
    }

}