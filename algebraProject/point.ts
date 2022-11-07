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

    distanceToOrigin():number {

        let distance = Math.sqrt(Math.pow((this.x - 0), 2) + Math.pow((this.y-0), 2))
        return distance
    
    }

    calculateDistance(anotherPoint:Point):number {

        let distance = Math.sqrt(Math.pow((anotherPoint.x - this.x ), 2) + Math.pow((anotherPoint.y - this.y), 2))
        return distance

    }

    calculateQuadrant():number {

        let quadrant = 0
        if (this.x == 0 || this.y == 0) { quadrant = 0}
        if (this.x > 0 && this.y > 0 ) { quadrant = 1 }
        if (this.x < 0 && this.y > 0) { quadrant = 2 }
        if (this.x < 0 && this.y < 0) { quadrant = 3 }
        if (this.x >0 && this.y < 0 ) { quadrant = 4 }

        return quadrant
    }

    calculateNearest(points:Point[]) {

        let arrDis:number[] = []
        for (let i=0;i<points.length;i++) {
                        
            arrDis.push(this.calculateDistance(points[i]))
            
        }

        let min = arrDis[0]
        let result = 0
        for (let i=0;i<arrDis.length;i++) {
            if (arrDis[i] < min) {
                result = i
                min = arrDis[i]
            }
        }

        return `El Point más cercano es el que esta en el indice ${result} del array de Points`
 
    }


}