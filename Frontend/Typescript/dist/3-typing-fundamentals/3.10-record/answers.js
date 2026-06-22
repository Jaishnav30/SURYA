"use strict";
// Exercise: Understanding TypeScript's Record Utility Type
Object.defineProperty(exports, "__esModule", { value: true });
// Question 2:
// Using the `UserRoles` type, create a variable named `roles` and assign it an object with the following user roles:
// - User with ID 'user1' has the role 'admin'
// - User with ID 'user2' has the role 'editor'
// - User with ID 'user3' has the role 'viewer'
const roles = {
    user1: "admin",
    user2: "editor",
    user3: "viewer",
};
// Question 3:
// Create a function named `getUserRole` that takes a user ID (string) and a `UserRoles` object, and returns the role of the user.
function getUserRole(userId, roles) {
    return roles[userId];
}
// Test your functions
console.log(getUserRole("user1", roles)); // Output: 'admin'
