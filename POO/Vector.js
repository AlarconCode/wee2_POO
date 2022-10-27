// Class Vector

export class Vector {

    constructor() {

        this.arrNumbers = this.arrayCreate(5,50)

    }

    // Methods

    // Crea un array aleatorio de n numeros de 0 a m
    arrayCreate(n,m) {
        let arr = []
        for (let i=0;i<n;i++) {
            arr[i] = Math.floor(Math.random() * m)
        }
        return arr
    }

    // Suma un arra "a" con el array de la clase 

    add(array) {
        if (array.length == this.arrNumbers.length) {
            let suma = []
            for (let i=0;i<array.length;i++) {
                suma[i] = array[i]+this.arrNumbers[i]
            }
            return suma
        } else 'El array no tienen el mismo numero de elementos que el array de la clase Vector'
    }
    
    // Multiplica el array de la clase por un numero n
    
    productNum(n) {
        return this.arrNumbers.map(value => value * n)
    }
    
    
    // Resta un array "array" con el array de la clase Vector
    
    subs(array) {
        if (array.length == this.arrNumbers.length) {
            for (let i=0;i<array.length;i++) {
                array[i] = array[i] - this.arrNumbers[i]
            }
            return array
        } else 'El array no tienen el mismo numero de elementos que el array de la clase Vector'
    }
    
    // Multiplica el array "array" con el array de la clase Vector
    
    product(array) {
        if (array.length == this.arrNumbers.length) {
            for (let i=0;i<array.length;i++) {
                array[i] = array[i] * this.arrNumbers[i]
            }
            return array
        } else 'El array no tienen el mismo numero de elementos que el array de la clase Vector'
    }
    

}