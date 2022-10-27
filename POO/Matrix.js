// Class Matrix

import { Vector } from "./Vector.js"

let vector_1 = new Vector()
let vector_2 = new Vector()
let vector_3 = new Vector()
let vector_4 = new Vector()
let vector_5 = new Vector()

export class Matrix {

    constructor() {

        this.matrix = [vector_1.arrNumbers,vector_2.arrNumbers,vector_3.arrNumbers, vector_4.arrNumbers, vector_5.arrNumbers]
        
    }

    // Methods

    // Crear una matriz
    createMatriz(filas, columnas, k) {
        let matrix = []
        for (let i=0; i<filas; i++) {
            matrix[i] = []
            for (let j=0; j<columnas; j++) {
                matrix[i][j] = Math.floor(Math.random() * k)
            }
        }
        return matrix
    
    }

    // Sumar la matriz "m" con la matriz de la clase Matrix

    add(m) {
       if (m.length == this.matrix.length) {
        let add = []
        for (let i=0; i<m.length; i++) {
            add[i] = []
            for (let j=0; j<m.length;j++) {
                add[i][j] = m[i][j] + this.matrix[i][j]
            }
        }
        return add
       } else 'No tienen los mismos elementos'
    }


    // Multiplica la matriz de la clase Matriz por un numero "n"

    productNum(n) {
        let product = []
        for (let i=0; i<this.matrix.length; i++) {
            product[i] = []
            for (let j=0; j<this.matrix.length;j++) {
                product[i][j] = this.matrix[i][j] * n
            }
        }
        return product
    }

    // Resta la matriz "m" con la matriz de la clase Matrix

    subs(m) {
        let result = []
        for (let i=0; i<m.length; i++) {
            result[i] = []
            for (let j=0; j<m.length;j++) {
                result[i][j] = m[i][j] - this.matrix[i][j]
            }
        }
        return result
    }
    
    // Multiplica la matriz "m" con la matriz de la clase Matrix

    product(m) {
        let result = []
        for (let i=0; i<m.length; i++) {
            result[i] = []
            for (let j=0; j<m.length;j++) {
                result[i][j] = m[i][j] * this.matrix[i][j]
            }
        }
        return result
    }
}