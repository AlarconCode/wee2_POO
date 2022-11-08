// test class Triangle

import { Point } from "./point";
import { Triangle } from "./triangle";

let myTriangle = new Triangle(new Point(5,10), new Point(3,9), new Point(10,25))

console.log(myTriangle.calculateLengthSides());
