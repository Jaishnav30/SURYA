"use strict";
// Exercise: Abstract Classes and Methods
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Create an abstract class `Vehicle` with an abstract method `move`.
// 2. Create a subclass `Car` that extends `Vehicle` and implement the `move` method
// to log "The car is driving."
class Vehicle {
}
class Car extends Vehicle {
    move() {
        console.log("The car is driving.");
    }
}
const car = new Car();
car.move(); // Output: The car is driving.
