//  class Triangle

import { Point } from "./point";

export class Triangle {

    private vertex1:Point
    private vertex2:Point
    private vertex3:Point

    constructor (vertex1:Point, vertex2:Point, vertex3:Point) {

        this.vertex1 = vertex1
        this.vertex2 = vertex2
        this.vertex3 = vertex3

    }

    // Methods

    calculateLengthSides():number[] {

        let sideA = this.vertex1.calculateDistance(this.vertex2)
        let sideB = this.vertex2.calculateDistance(this.vertex3)
        let sideC = this.vertex3.calculateDistance(this.vertex1)
        let lengthSides = [sideA, sideB, sideC]

        return lengthSides

    }

}