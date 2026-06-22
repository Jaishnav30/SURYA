"use strict";
// Exercise 1: Change the class below to use a static field `pi`
// and a static method `calculateArea` that accepts a radius.
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    pi = 3.14;
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return this.pi * this.radius * this.radius;
    }
}
// Exercise 2: Create a class `Counter` with a private static field `count`
// that tracks of the number of instances created.
// Include a `getCount` method that returns the current count.
