"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printUser(user) {
    console.log(user);
}
const product = { id: 1, name: "Product 1" };
// No error, even though printUser expects a User
printUser(product);
