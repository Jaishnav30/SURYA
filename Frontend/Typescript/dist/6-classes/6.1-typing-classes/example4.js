"use strict";
// Must call super in the constructor of a derived class
Object.defineProperty(exports, "__esModule", { value: true });
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
        super(name, age); // Compile error without this
        this.jobTitle = jobTitle;
    }
}
