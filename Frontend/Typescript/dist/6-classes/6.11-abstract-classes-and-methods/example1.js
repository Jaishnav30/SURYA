"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract class has no implementation. Must be extended.
class Animal {
    run() {
        console.log("Running");
    }
}
// Can't instantiate.
// const cat: Animal = new Animal(); // Error: Cannot create an instance of an abstract class.
// Must extend
class Dog extends Animal {
    makeSound() {
        console.log("Woof");
    }
    move() {
        console.log("Running");
    }
}
const dog = new Dog();
dog.run();
