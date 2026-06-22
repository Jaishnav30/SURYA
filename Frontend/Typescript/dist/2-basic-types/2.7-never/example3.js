"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function example(x) {
    if (typeof x === "string") {
        x.toUpperCase();
    }
    else if (typeof x === "number") {
        x.toFixed(2);
    }
    else {
        const _exhaustiveCheck = x; // type 'never' applies if we forget to handle a value in the union
        return _exhaustiveCheck;
    }
}
