"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Function to describe the vehicle
function describeVehicle(vehicle) {
    switch (vehicle.kind) {
        case "car":
            return `A car with ${vehicle.numberOfDoors} doors.`;
        case "truck":
            return `A truck with a payload capacity of ${vehicle.payloadCapacity}.`;
        default:
            // Exhaustive check
            const _exhaustiveCheck = vehicle;
            return _exhaustiveCheck;
    }
}
// Test cases
const car = { kind: "car", numberOfDoors: 4 };
const truck = { kind: "truck", payloadCapacity: 2000 };
console.log(describeVehicle(car)); // Should print the description of the car
console.log(describeVehicle(truck)); // Should print the description of the truck
