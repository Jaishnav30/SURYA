"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Using a nested namespace to group and encapsulate instead of a separate file
var App;
(function (App) {
    // Nested namespace
    let Utils;
    (function (Utils) {
        function greet(user) {
            return `Hello, ${user.name}`;
        }
        Utils.greet = greet;
        function privateFunction() {
            console.log("This is private!");
        }
    })(Utils = App.Utils || (App.Utils = {}));
})(App || (App = {}));
const user = { id: 1, name: "Alice" };
console.log(App.Utils.greet(user));
// This will not work because `privateFunction` is private.
// App.Utils.privateFunction();
