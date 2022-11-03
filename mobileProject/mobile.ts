// Clase Mobile

export class Mobile {

    private name:string
    private trademark:string
    private model:string
    private color:string
    private price:number

    constructor (name:string, trademark:string, model:string, color:string, price:number) {

        this.name = name
        this.trademark = trademark
        this.model = model
        this.color = color
        this.price = price

    }

    // getters

    getName():string {
        return this.name
    }

    getTrademark():string {
        return this.trademark
    }

    getModel():string {
        return this.model
    }

    getColor():string {
        return this.color
    }

    getPrice():number {
        return this.price
    }

    // setters

    setName(name:string) {
        this.name = name
    }

    setTrademark(trademark:string) {
        this.trademark = trademark
    }

    setModel(model:string) {
        this.model = model
    }

    setColor(color:string) {
        this.color = color
    }

    setPrice(price:number) {
        this.price = price
    }

}

