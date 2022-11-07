// Test class Point

import { Point } from "./point";

let myPoint = new Point(-10,-5)

// console.log(myPoint.getX());
// console.log(myPoint.getY());
// myPoint.setX(-5)
// myPoint.setY(25)

// console.log(myPoint.getX());
// console.log(myPoint.getY());

console.log(myPoint.distanceToOrigin());
console.log(myPoint.calculateDistance(new Point(-5, -20)));

console.log(myPoint.calculateQuadrant());


