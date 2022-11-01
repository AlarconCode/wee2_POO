import { Vector } from "./Vector";

let myVector = new Vector(5, 50)
let v1 = new Vector(5,10)
let v2 = new Vector(5,200)

myVector.print()
v1.print()
v2.print()
console.log('Suma:');
console.log(myVector.add(v1));
console.log('Resta:');
console.log(myVector.subs(v2));
console.log('Multiplicar por Vector:');
console.log(myVector.mult(v1));
console.log('Multiplicar por número:');
console.log(myVector.multNumber(2));
