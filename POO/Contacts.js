// class Contacts
import { Person } from "./Person.js";

let pedro = new Person('Pedro',55,160,1990,'negro',['padel', 'painting'])
let maria = new Person('María',45,155,1993,'rojo',['bailar', 'correr'])
let beloki = new Person('Arantxa',60,160,'azul',['bicicleta', 'nadar'])

export class Contacts {

    constructor() {

        this.contacts = [pedro, maria, beloki]

    }

    // Methods

    printPerson() {
        for (let attribute of this.contacts) {
            console.log(`
            ****Contacto****`);
            for (let property in attribute) {
                console.log(`${property} - ${attribute[property]}`);
            }
        }
    }

}