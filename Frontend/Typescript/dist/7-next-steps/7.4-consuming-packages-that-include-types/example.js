"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Consuming an npm package that includes types
const date_fns_1 = require("date-fns");
const month = (0, date_fns_1.format)(new Date(), "LLLL");
console.log(month);
