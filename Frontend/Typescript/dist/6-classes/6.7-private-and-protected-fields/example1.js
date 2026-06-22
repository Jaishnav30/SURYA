"use strict";
// Private fields
Object.defineProperty(exports, "__esModule", { value: true });
// You can mark a class field as private to prevent it from being accessed from outside the class.
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const person = new Person("Alice");
person.greet(); // Hello, my name is Alice
// This will fail:
// console.log(person.name); // Error: Property 'name' is private and only accessible within class 'Person'.
// This will also fail:
// person.name = "Bob"; // Error: Property 'name' is private and only accessible within class 'Person'.
