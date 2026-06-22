"use strict";
// Even works if one of the interfaces had an extra property:
Object.defineProperty(exports, "__esModule", { value: true });
const user = { id: 1, name: "Cory", age: 30 };
// Allowed because the two interfaces have a compatible structure. But the age property is not used.
const product = user;
console.log(product);
// Error - No age property on Product.
// product.age;
