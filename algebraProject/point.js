"use strict";
// Class Point
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    // getters
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    // setters
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    // Methods
    Point.prototype.toString = function () {
        return "(".concat(this.x, ",").concat(this.y, ")");
    };
    Point.prototype.distanceToOrigin = function () {
        var distance = Math.sqrt(Math.pow((this.x - 0), 2) + Math.pow((this.y - 0), 2));
        return distance;
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var distance = Math.sqrt(Math.pow((anotherPoint.x - this.x), 2) + Math.pow((anotherPoint.y - this.y), 2));
        return distance;
    };
    Point.prototype.calculateQuadrant = function () {
        var quadrant = 0;
        if (this.x == 0 || this.y == 0) {
            quadrant = 0;
        }
        if (this.x > 0 && this.y > 0) {
            quadrant = 1;
        }
        if (this.x < 0 && this.y > 0) {
            quadrant = 2;
        }
        if (this.x < 0 && this.y < 0) {
            quadrant = 3;
        }
        if (this.x > 0 && this.y < 0) {
            quadrant = 4;
        }
        return quadrant;
    };
    Point.prototype.calculateNearest = function (points) {
        var arrDis = [];
        for (var i = 0; i < points.length; i++) {
            arrDis.push(this.calculateDistance(points[i]));
        }
        var min = arrDis[0];
        var result = 0;
        for (var i = 0; i < arrDis.length; i++) {
            if (arrDis[i] < min) {
                result = i;
                min = arrDis[i];
            }
        }
        return "El Point m\u00E1s cercano es el que esta en el indice ".concat(result, " del array de Points y es ").concat(points[result]);
    };
    return Point;
}());
exports.Point = Point;
