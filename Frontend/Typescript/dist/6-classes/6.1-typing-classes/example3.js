"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Inheritance looks like plain JS - use the `extends` keyword
class Person {
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
class Employee extends Person {
    jobTitle;
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and I work as a ${this.jobTitle}.`);
    }
}
