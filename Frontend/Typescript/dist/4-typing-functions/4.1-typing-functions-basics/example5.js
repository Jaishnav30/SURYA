"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Structural typing applies to functions too. This is valid.
let add = (a, b) => a + b;
let add2 = (c, d) => c + d;
add = add2;
// Invalid. Different number of args.
let add3 = (a, b, c) => a + b + c;
// add = add3; // Error
// If the last parameter is optional, it's still valid.
let add4 = (a, b, c) => a + b + (c || 0);
add = add4;
