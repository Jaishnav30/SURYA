"use strict";
// Exercise: Namespaces
Object.defineProperty(exports, "__esModule", { value: true });
// Question 1: Create a namespace called `MathOperations` that contains a function `add`
// which takes two numbers and returns their sum.
var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        return a + b;
    }
    MathOperations.add = add;
})(MathOperations || (MathOperations = {}));
// Question 2: Extend the `MathOperations` namespace to include a function `subtract`
// which takes two numbers and returns their difference.
(function (MathOperations) {
    function subtract(a, b) {
        return a - b;
    }
    MathOperations.subtract = subtract;
})(MathOperations || (MathOperations = {}));
// Question 3: Use the `MathOperations` namespace to add and subtract two numbers,
// and log the results to the console.
const sum = MathOperations.add(10, 5);
const difference = MathOperations.subtract(10, 5);
console.log(`Sum: ${sum}, Difference: ${difference}`);
