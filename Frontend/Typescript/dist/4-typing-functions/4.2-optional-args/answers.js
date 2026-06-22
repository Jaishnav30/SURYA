"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Make the second parameter optional.
function concatStrings(str1, str2) {
    return str1 + str2;
}
// 2. Specify an empty string as the default value for the second parameter.
function concatStrings2(str1, str2 = "") {
    return str1 + str2;
}
