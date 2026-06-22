"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Could use union, but doesn't enforce matching types for a and b
function add(a, b) {
    // return a + b; // doesn't work
    return a + b; // works, but ugly
}
