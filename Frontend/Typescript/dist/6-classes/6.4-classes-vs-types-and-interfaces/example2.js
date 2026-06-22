"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// This works
const user = new User("Alice", 30);
