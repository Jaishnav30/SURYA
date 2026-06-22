"use strict";
// Can't access a protected field from a sibling class
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    x = 1;
}
class Derived1 extends Base {
    x = 2;
}
class Derived2 extends Base {
    f1(derived2) {
        derived2.x = 10;
    }
    f2(derived1) {
        // derived1.x = 10; // Property 'x' is protected and only accessible within class 'Derived1' and its subclasses.
    }
}
