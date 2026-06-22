"use strict";
// Exercise: Using TypeScript's readonly feature
Object.defineProperty(exports, "__esModule", { value: true });
function updatePerson(person) {
    person.age = 30;
    person.address = { street: "New Street", city: "New City" };
    console.log(person);
}
// 2. Make the personConst below immutable by marking `as const`.
// Then note that you cannot mutate the properties of the object below.
const personConst = {
    firstName: "John",
    lastName: "Doe",
};
// Try to mutate person.age and person.address.
personConst.firstName = "Jane"; // Error: Cannot assign to 'firstName' because it is a read-only property.
