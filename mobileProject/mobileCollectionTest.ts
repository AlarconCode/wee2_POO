// Test class mobileCollection

import { Mobile } from "./mobile";
import { mobileCollection } from "./mobileCollection"

let myMobile = new Mobile('Iphone', 'Apple', 'Iphone 12plus', 'Black', 1300)
let myMobile2 = new Mobile('Mobile of John', 'Samsung', 'Samsung s22', 'Red', 1500)
let myMobile3 = new Mobile('Mobile of Wil', 'OPPO', 'Oppo 14', 'Grey', 900)
let myMobile4 = new Mobile('Iphone of Peter', 'Apple', 'Iphone 24', 'Gold', 3000)
let myMobile5 = new Mobile('Mobile of Jack', 'Samsung', 'Samsung s21', 'Blue', 1500)

let myMobiles = [myMobile, myMobile2, myMobile3, myMobile4]
let myMobiles2 = [myMobile, myMobile2, myMobile3, myMobile4, myMobile5]

let myCollection = new mobileCollection(myMobiles2)
console.log(myCollection.printCollection());

console.log(myCollection.getMobiles());
console.log(myCollection.getTotalPrice());

myCollection.setMobiles(myMobiles)
myCollection.setTotalPrice(6500)

console.log(myCollection.getMobiles());
console.log(myCollection.getTotalPrice());

