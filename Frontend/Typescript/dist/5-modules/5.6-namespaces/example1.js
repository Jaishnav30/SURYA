"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyNamespace;
(function (MyNamespace) {
    MyNamespace.myVar = "Hello, world!";
    const myPrivateVar = "This is private!";
})(MyNamespace || (MyNamespace = {}));
console.log(MyNamespace.myVar);
// This will not work because `myPrivateVar` is private.
// console.log(MyNamespace.myPrivateVar);
