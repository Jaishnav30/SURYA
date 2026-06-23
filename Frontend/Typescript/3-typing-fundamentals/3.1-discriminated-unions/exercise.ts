// Define a Vehicle type using discriminated union.
// The type should have two possible shapes: car or truck.
// The car shape should have a numberOfDoors property.
// The truck shape should have a payloadCapacity property
// Write a function `describeVehicle` that accepts a Vehicle and returns a string describing the vehicle.
// The function should return "A car with X doors." for car shapes,
// "A truck with a payload capacity of Y." for truck shapes

type Vehicle = {name:"Car",numberOfDoors:number} | {name:"Truck",payloadCapacity:number}

function describeVehicle(v: Vehicle){
    switch (v.name){
        case "Car":
            return `A car with ${v.numberOfDoors} doors`;
        case "Truck":
            return `A truck with a payload capacity of ${v.payloadCapacity}`;
        default:
            const _exhaustiveCheck: never =v;
            return _exhaustiveCheck;
    }
}

// Test cases
const car: Vehicle = { name: "Car", numberOfDoors: 4 };
const truck: Vehicle = { name: "Truck", payloadCapacity: 2000 };

console.log(describeVehicle(car)); // Should print the description of the car
console.log(describeVehicle(truck)); // Should print the description of the truck
