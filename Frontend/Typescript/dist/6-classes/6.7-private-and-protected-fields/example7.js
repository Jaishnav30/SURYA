"use strict";
// Different instances of the same class can access each other's private fields.
Object.defineProperty(exports, "__esModule", { value: true });
class A {
    x = 10;
    sameAs(other) {
        // No error
        return other.x === this.x;
    }
}
const a1 = new A();
const a2 = new A();
console.log(a1.sameAs(a2)); // true
