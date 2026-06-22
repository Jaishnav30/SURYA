"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// CommonJS example
const fs = require("fs");
module.exports = {
    doStuff: function () {
        fs.readFile("data.txt", "utf8", function (err, data) {
            console.log(data);
        });
    },
};
