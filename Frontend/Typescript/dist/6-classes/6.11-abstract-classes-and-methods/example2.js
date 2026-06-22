"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract constructor signature example
class Base {
    printName() {
        console.log("Hello, " + this.getName());
    }
}
class Derived extends Base {
    getName() {
        return "world";
    }
}
// Specify that the constructor function must be a subclass of `Base`
function greet(ctor) {
    const instance = new ctor();
    instance.printName();
}
greet(Derived); // Hello, world
// greet(Base); // fails
