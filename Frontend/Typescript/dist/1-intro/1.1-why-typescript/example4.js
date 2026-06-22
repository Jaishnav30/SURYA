"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Typed function
function add(a, b) {
    return a + b;
}
// This fails
// add("one", 2); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
