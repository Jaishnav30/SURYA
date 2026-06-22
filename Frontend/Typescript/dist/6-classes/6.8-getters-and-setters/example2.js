"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// if the setter's type isn't specified, it's inferred
class Person {
    _name;
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
