import { Person } from "./Person";

let Juan = new Person('Juan', 32, 'St. Juan Bravo, 125');

Juan.printName();
console.log(Juan.yearOfBirth(2022));
console.log(Juan.getAddress());
Juan.setAddress('Calle Alcala, 322 - Madrid');
console.log(Juan.getAddress());


