"use strict";
// Static blocks are useful for class-level initialization.
Object.defineProperty(exports, "__esModule", { value: true });
class StaticExample {
    // Unlike constructor, static block executes only once when the class is first loaded in the environment.
    static {
        console.log(`Running static block...`);
    }
}
const instance1 = new StaticExample();
const instance2 = new StaticExample();
