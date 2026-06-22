"use strict";
// Derived class may expose a subtype of the base class
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    a = 1;
}
class Derived extends Base {
    a = 2; // No modifier, so public
}
const d = new Derived();
console.log(d.a); // OK
