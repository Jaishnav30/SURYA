"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    // This is necessary - it's not applied by `implements` since implements only checks for compatibility
    name;
    constructor(name) {
        this.name = name;
    }
    // The is necessary - it's not applied by `implements` since implements only checks for compatibility
    speak(message) {
        console.log(message);
    }
}
