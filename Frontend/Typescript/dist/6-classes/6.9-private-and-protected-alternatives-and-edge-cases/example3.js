"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// Workaround: Can access private fields via bracket notation.
class User {
    password = "123";
}
exports.User = User;
const user = new User();
console.log(user["password"]); // 123
