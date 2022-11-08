// Test class Point

import { Point } from "./point";

let myPoint = new Point(-10,-5)
let point1 = new Point(1,2)
let point2 = new Point(-2,50)
let point3 = new Point(-20,5)
let point4 = new Point(-15,50)

let points = [point4, point2, point3, point1]

console.log(myPoint.getX());
console.log(myPoint.getY());
myPoint.setX(-5)
myPoint.setY(25)

console.log(myPoint.getX());
console.log(myPoint.getY());

console.log(myPoint.distanceToOrigin());
console.log(myPoint.calculateDistance(point1));

console.log(myPoint.calculateQuadrant());

console.log(myPoint.calculateNearest(points));


