"use strict";
// Question 1: Create an instance of the class below.
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    describe() {
        console.log(`This book is titled "${this.title}" and is authored by ${this.author}.`);
    }
}
const book = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const pearTree = {
    height: 10,
    age: 5,
};
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2025,
};
