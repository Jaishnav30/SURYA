"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enums are actually objects that exist at runtime, so they can be passed to functions
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
function printColor(color) {
    console.log(color);
}
printColor(Color.Red);
