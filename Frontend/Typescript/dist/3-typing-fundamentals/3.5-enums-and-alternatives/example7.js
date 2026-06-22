"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enums support reverse mapping
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
const red = Color.Red;
let nameOfRed = Color[red]; // "Red"
// But string enums don't support it:
var ColorNames;
(function (ColorNames) {
    ColorNames["Red"] = "red";
    ColorNames["Green"] = "green";
    ColorNames["Blue"] = "blue";
})(ColorNames || (ColorNames = {}));
const redName = ColorNames.Red;
// This fails is noImplicitAny is true, so set temporarily to demonstrate:
let valueOfRedName = ColorNames[redName]; // Property 'red' does not exist on type 'typeof ColorNames'.
