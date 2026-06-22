"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Alternatively, you even specify a default but this is just a more verbose way of
// specifying an optional parameter:
function greet(name, greeting = undefined) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    else {
        return `Hello, ${name}!`;
    }
}
greet("Alice", undefined); // Output: Hello, Alice!
