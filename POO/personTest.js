import { Person } from "./Person.js";

let yo = new Person('Julian',75,175,1981,'castaño', ['Chess', 'Video Gamming'])
console.log(yo.calcAge(2022));
yo.printAll()
yo.printHobbies()