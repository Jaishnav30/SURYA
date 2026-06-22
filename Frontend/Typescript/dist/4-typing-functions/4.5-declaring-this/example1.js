"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Alice",
    sayHello() {
        console.log(`Hello, ${this.name}!`); // type safe, and autocomplete works.
    },
};
