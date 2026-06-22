"use strict";
// Exercise: Using readonly and as const
Object.defineProperty(exports, "__esModule", { value: true });
function updatePerson(person) {
    // These fail as expected
    // person.age = 30; // Error: Cannot assign to 'age' because it is a read-only property.
    // Error: Cannot assign to 'address' because it is a read-only property.
    // person.address = { street: "New Street", city: "New City" };
}
// 2. Make the personConst below immutable by marking `as const`.
// Then note that you cannot mutate the properties of the object below.
const personConst = {
    firstName: "John",
    lastName: "Doe",
};
// Fails, as expected
// personConst.firstName = "Jane"; // Error: Cannot assign to 'firstName' because it is a read-only property.
