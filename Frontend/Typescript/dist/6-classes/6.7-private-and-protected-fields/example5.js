"use strict";
// Can't access a private field from a derived class, nor can you override it.
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    x = 0;
}
class Derived extends Base {
}
