"use strict";
// test class Triangle
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var triangle_1 = require("./triangle");
var myTriangle = new triangle_1.Triangle(new point_1.Point(5, 10), new point_1.Point(3, 9), new point_1.Point(10, 25));
console.log(myTriangle.calculateLengthSides());
