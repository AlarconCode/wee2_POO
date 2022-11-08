"use strict";
//  class Triangle
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    // Methods
    Triangle.prototype.calculateLengthSides = function () {
        var sideA = this.vertex1.calculateDistance(this.vertex2);
        var sideB = this.vertex2.calculateDistance(this.vertex3);
        var sideC = this.vertex3.calculateDistance(this.vertex1);
        var lengthSides = [sideA, sideB, sideC];
        return lengthSides;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
