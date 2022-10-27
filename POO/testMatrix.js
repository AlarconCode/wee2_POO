import { Matrix } from "./Matrix.js"

let myMatrix = new Matrix()

console.log(myMatrix);
console.log('Aleatoria',myMatrix.createMatriz(5,5,15));
console.log('Suma', myMatrix.add(myMatrix.createMatriz(5,5,15)));
console.log('Product Num', myMatrix.productNum(5));
console.log('Resta', myMatrix.subs(myMatrix.createMatriz(5,5,15)));
console.log('Producto', myMatrix.product(myMatrix.createMatriz(5,5,15)));
