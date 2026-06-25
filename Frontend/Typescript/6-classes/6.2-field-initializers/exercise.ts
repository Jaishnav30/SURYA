// Exercise: Class Field Initializers in TypeScript

// Question 1:
// Create a class `Car` with a field `year` that is initialized to 2025 and `make`
// that is initialized to "Toyota".
// Provide a method `getInfo` that returns a string in the format "Year: 2025, Make: Toyota".
class Car{
    year:number=2025
    make:string="Toyota"
    getInfo():string{
        return `Year: ${this.year}, Make: ${this.make}`;
    }
}

var car = new Car();
console.log(car.getInfo());
