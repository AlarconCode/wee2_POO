// class Vector

export class Vector {

    private elements:number[]

    constructor(n:number, k:number) {
        let array:number[] = []
        for (let i=0; i<n; i++) {
            array.push(Math.floor(Math.random() * k))
        }
        this.elements = array

    }

    // Methods

    print() {
        console.log(this.elements);
    }

    add(v1:Vector):Vector {
        
        for (let num in v1.elements) {
            v1.elements[num] += this.elements[num];
        }

        // Logica con metodo map
        // v1.elements.map((value, index)=> {            
        //     v1.elements[index] = value + this.elements[index]
        // })

        return v1

    }

    subs(v1:Vector):Vector {

        for (let num in v1.elements) {
            v1.elements[num] -= this.elements[num];
        }

        return v1

    }

    mult(v1:Vector):Vector {

        for (let num in v1.elements) {
            v1.elements[num] *= this.elements[num];
        }
        
        return v1

    }

    multNumber(n:number):Vector{

        for (let num in this.elements) {
           this.elements[num] *= n
            
        }

        return this

    }

    getElements() {
        return this.elements
    }


}