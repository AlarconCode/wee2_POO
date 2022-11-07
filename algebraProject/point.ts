// Class Point

export class Point {

    private x:number
    private y:number

    constructor (x:number, y:number) {

        this.x = x
        this.y = y

    }

    // getters

    getX():number {

        return this.x

    }
    
    getY():number {

        return this.y

    }

    // setters

    setX(x:number) {

        this.x = x

    }
    
    setY(y:number) {

        this.y = y

    }

    // Methods

    toString():string {

        return `(${this.x},${this.y})`

    }


}