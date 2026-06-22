"use strict";
// Static members can have access modifiers.
Object.defineProperty(exports, "__esModule", { value: true });
class MyClass {
    static myStaticProperty = 42;
    static myStaticMethod() {
        return MyClass.myStaticProperty;
    }
}
// console.log(MyClass.myStaticProperty); // Error: Property 'myStaticProperty' is private and only accessible within class 'MyClass'.
