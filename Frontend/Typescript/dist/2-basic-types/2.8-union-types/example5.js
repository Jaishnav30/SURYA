"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car = { hasWheels: true };
const airplane = { canFly: true };
const flyingCar = { hasWheels: true, canFly: true };
// Error - Vehicle type specifies that it must have either hasWheels or canFly
// flyingCar.hasWheels = true;
