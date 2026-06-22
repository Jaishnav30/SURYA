"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// namespace can enhance an existing class
class User {
    constructor(id, name) { }
}
// Add static method to class via namespace
(function (User) {
    function fromJSON(json) {
        const data = JSON.parse(json);
        return new User(data.id, data.name);
    }
    User.fromJSON = fromJSON;
})(User || (User = {}));
const user = User.fromJSON('{ "id": 1, "name": "Alice" }');
console.log(user);
