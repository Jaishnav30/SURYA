"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    else {
        return `Hello, ${name}!`;
    }
}
// Usage examples
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", "Good morning")); // Output: Good morning, Bob!
