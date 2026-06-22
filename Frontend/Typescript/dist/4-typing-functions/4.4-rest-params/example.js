"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
// Test your implementation:
sum(1, 2, 3, 4, 5); // 15
sum(1, 2, 3); // 6
