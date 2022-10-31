import { Person } from "./Person";

let Merche:Person = new Person('Merche', 46, 'Calle Murillo, 32')
let Irene:Person = new Person('Irene', 13, 'Calle Puente, 21')
let Wilfried:Person = new Person('Wilfried', 39, 'Calle Doctor Fleming')
let Julien:Person = new Person('Julien', 41, 'Calle Angel, 7 - 2ºE')

export class Contacts {

    people:Person[]

    constructor() {

        this.people = [Merche,Irene,Wilfried,Julien]

    }

    // Methods

    printCalendar():string {
        
        let arrayData:string[] = []
        
        for (let people of this.people) {
            
            
            for (let property in people) {
                    
                if (typeof people[property] != 'function'){
                
                    arrayData.push(`
                    ${property} - ${people[property]}`)
                } 
            
            }
            
        }
        
        return arrayData.join('')
    
    }

}