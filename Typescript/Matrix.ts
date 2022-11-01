// class Matrix

import { Vector } from "./Vector";

export class Matrix {

    private elements:Vector[]

    constructor(n:number, m:number, k:number) {

        let matrix:Vector[] = []
        for (let i=0; i<n; i++) {
            matrix[i] = new Vector(m,k)
        }
        this.elements = matrix

    }

    // Methods

    print() {
        console.log(this.elements);
    }

    add(m1:Matrix):Matrix {
        
        for (let el in m1.elements) {
            
            m1.elements[el] = m1.elements[el].add(this.elements[el])
        
        }

        return m1

    }

    multNumber(n:number):Matrix {

        for (let el in this.elements) {
            
            this.elements[el] = this.elements[el].multNumber(n)
        
        }

        return this

    }

    multSpecial(n:number):Matrix {

        // Con getElements en la clase Vector
        for (let i=0; i<this.elements.length;i++) {
            
            for (let j=0;j<this.elements[i].getElements().length;j++) {
                
                if (this.elements[i].getElements()[j] % 2 == 0) {
                
                    this.elements[i].getElements()[j] *= n
                
                } else {
                
                    this.elements[i].getElements()[j] *= (n-1)
                
                }
                
                
            }
            
            
        }
        
        return this        
        
    }
    
}


// Sin getElements en la clase Vector
// for (let i=0; i<this.elements.length;i++) {
    
//     for (let el in this.elements[i]) {
        

//         if (el == 'elements') {
//             for (let j=0;j<this.elements[i][el].length;j++) {

//                 if (this.elements[i][el][j] % 2 == 0) {
//                     this.elements[i][el][j] *= n
//                 } else {
//                     this.elements[i][el][j] *= (n-1)
//                 }

//             }
            
//         }
    
//     }

// }