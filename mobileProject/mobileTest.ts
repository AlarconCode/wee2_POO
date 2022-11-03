// test para la clase Mobile

import { Mobile } from "./mobile";

let myMobile = new Mobile('Iphone', 'Apple', 'Iphone 12plus', 'Black', 1300)

console.log(myMobile.getName());
console.log(myMobile.getTrademark());
console.log(myMobile.getModel());
console.log(myMobile.getColor());
console.log(myMobile.getPrice());

myMobile.setName('Iphone of Karl')
myMobile.setTrademark('Apple Company')
myMobile.setModel('Iphone 14')
myMobile.setColor('Blue')
myMobile.setPrice(1600)

console.log(myMobile.getName());
console.log(myMobile.getTrademark());
console.log(myMobile.getModel());
console.log(myMobile.getColor());
console.log(myMobile.getPrice());
