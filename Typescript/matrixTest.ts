import { Matrix } from "./Matrix";

let myMatrix = new Matrix(5,5,32)

myMatrix.print()
console.log('Suma:');
console.log(myMatrix.add(new Matrix(5,5,27)));
console.log(myMatrix.multNumber(3));
console.log(myMatrix.multSpecial(2));

