"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Avoid property shorthand
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi, ${this.name}, you're ${this.age} years old.`);
    }
}
