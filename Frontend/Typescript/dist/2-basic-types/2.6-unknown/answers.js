"use strict";
// Exercise: Working with the `unknown` type in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Declare a variable of type `unknown` and assign a value to it.
let unknownValue = "Hello, TypeScript!";
// 2. Write a function `isString` that takes an argument of type `unknown` and returns true if the argument is a string.
function isString(value) {
    return typeof value === "string";
}
// 3. Call the isString function above to check if the `unknownValue` is a string, and if so, log its length to the console.
if (isString(unknownValue)) {
    console.log(`The length of the string is: ${unknownValue.length}`);
}
else {
    console.log("The value is not a string.");
}
