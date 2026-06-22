"use strict";
// Exercise 1: Make the title field readonly.
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    constructor(title) {
        this.title = title;
    }
}
// Exercise 2: Attempt to modify a readonly field
// Create an instance of the `Book` class and try to modify the `title` field.
// What error do you get?
