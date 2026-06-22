"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Fetch returns a Promise<any>
async function getUserById(id) {
    const resp = await fetch("http://example.com/user/1");
    return resp.json();
}
let user = getUserById(1);
