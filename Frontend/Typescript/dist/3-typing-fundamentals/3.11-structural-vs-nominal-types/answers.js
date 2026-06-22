"use strict";
// Exercise: Structural vs Nominal Types in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
function logPersonName(person) {
    return console.log(person.name);
}
// Answer:
const employee = { name: "John Doe", age: 30, employeeId: 1 };
logPersonName(employee); // works because employee's structure is compatible with Person
// Question 2: Comment out the age property on Employee. What happens?
// Answer:
// The logPersonName call now fails because employee's structure is no longer compatible with Person.
