//  clase Person

export class Person {

    // constructor
    constructor(name,weight, height, yearOfBirth, hairColor, hobbies ) {

        this.name = name
        this.weight = weight
        this.height = height
        this.yearOfBirth = yearOfBirth
        this.hairColor = hairColor
        this.hobbies = hobbies
        
    }

    // Metodos

    // Calcular IMC
    calcIMC() {
        let IMC = this.peso / (this.height * this.height)
        return IMC
    }

    // Calcula la edad con el año de nacimiento
    calcAge(currentYear) {
        let year = new Date()
        let age = currentYear - this.yearOfBirth
        if (currentYear == year.getFullYear()) {
            return age
        } else {
            return 'introduce el año actual para calcular la edad'
        }
        
    }

    // imprime por consola los atributos de la clase Person seguidos de "-"
    printAll() {
        // this es la clase Person
        for (let property in this) {
            console.log(`${property} - ${this[property]}`); 
        }

    }

    // Muestra los hobbies 
    printHobbies() {
        for (let hobbie of this.hobbies) {
            console.log(hobbie);
        }
    }
   

}


