"use strict";
// TypeScript forbids declaring a private property in a subclass
// with the same name as a private property in the superclass.
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    value = 1;
}
// @ts-expect-error
class Sub extends Base {
    value = 2; // Compile error
}
// This is unfortunately allowed with private fields:
class Base2 {
    #value = 1;
}
class Sub2 extends Base2 {
    #value = 2; // Not an error
}
