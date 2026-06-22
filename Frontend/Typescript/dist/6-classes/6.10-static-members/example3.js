"use strict";
// Unlike C#/Java, static classes aren't supported.
// Here are some alternatives:
Object.defineProperty(exports, "__esModule", { value: true });
// Unnecessary "static" class
class MyStaticClass {
    static doStuff() { }
}
// Prefer bare function
function doStuff() { }
// Or an object literal
const helper = {
    doStuff() { },
};
