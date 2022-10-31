// Class Person

export class Person {
    name:string
    age:number
    private address:string

    constructor(name:string, age:number, address:string) {
        this.name = name
        this.age = age
        this.address = address
    }

    // Methods

    // Print name for console
    printName() {
        console.log(this.name);
        
    }

    // Calc and return year of birth
    yearOfBirth(currentYear:number):number {
        return currentYear - this.age
    }

    // Modify address
    setAddress(address:string) {
        this.address = address
    }

    // return address value
    getAddress():string {
        return this.address
    }
}