"use strict";
// Exercise: Understanding the `never` type in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Type this function to return `never`.
function error(message) {
    throw new Error(message);
}
function describeUser(user) {
    switch (user.kind) {
        case "admin":
            return `An admin with privileges: ${user.privileges.join(", ")}.`;
        case "guest":
            return `A guest with ${user.visitCount} visits.`;
    }
}
// Test the functions above by uncommenting the following lines one by one and observing the behavior:
// error("This is an error message");
// fail();
// console.log(isString("test")); // Should return true
// console.log(isString(123)); // Should throw an error
