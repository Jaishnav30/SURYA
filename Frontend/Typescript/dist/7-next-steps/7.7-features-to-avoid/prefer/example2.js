"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Prefer the long form
class Person2 {
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
