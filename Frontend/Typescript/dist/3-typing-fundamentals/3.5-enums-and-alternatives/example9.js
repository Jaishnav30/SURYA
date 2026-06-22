"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Consider using a const object instead of an enum
const Colors = {
    Red: "red",
    Green: "green",
    Blue: "blue",
};
// To pass a list of colors to a function, use keyof typeof
function printColors(color) {
    console.log(color);
}
printColors("Red");
