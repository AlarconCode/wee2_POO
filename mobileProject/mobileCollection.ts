// Class mobileCollection

import { Mobile } from "./mobile";

export class mobileCollection {

    private mobiles:Mobile[]
    private totalPrice:number

    constructor(mobiles:Mobile[]) {
        this.mobiles = mobiles
        this.totalPrice = this.totalPriceCalculation()
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

    // Methods

    private totalPriceCalculation():number {
        let total:number = 0
        for (let mobile of this.mobiles) {
            total += mobile.getPrice()
        }
        return total
    }

    printCollection() {
        let collection = ''
        for (let mobile of this.mobiles) {

            collection += `The characteristics of the mobile name are:
            Name: ${mobile.getName()}
            Trademark: ${mobile.getTrademark()}
            Model: ${mobile.getModel()}
            Color: ${mobile.getColor()}
            Price: ${mobile.getPrice()}

            
            `

        }

        return `
        ${collection}
        Price overall: ${this.totalPrice}`
    

    }

}