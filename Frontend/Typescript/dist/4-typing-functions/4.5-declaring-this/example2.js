"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Can declare this on bare functions as well
const person = { name: "Alice" };
function sayHello() {
    console.log(`Hello, ${this.name}!`);
}
sayHello.call(person); // Hello, Alice!
