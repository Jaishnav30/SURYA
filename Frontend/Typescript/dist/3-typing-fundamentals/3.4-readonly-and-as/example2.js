"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Also works with classes
class Point {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const point = new Point(10, 20);
// This fails
// point.x = 5; // Error: Cannot assign to 'x' because it's a readonly property.
