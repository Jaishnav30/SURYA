"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// If get exists but there's no set, the property is readonly:
class Person {
    _name;
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
const person = new Person("Alice");
console.log(person.name); // Alice
// person.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
