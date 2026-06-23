// Exercise: Typing Objects in TypeScript

// Question 1: Create an object literal representing a book with the following properties:
// - title: string
// - author: string
// - pages: number
const book = {
    title:"Wings of Fire",
    author: "Dr. A P J Abdul Kalam",
    pages: 141
}

// Question 2: If you try adding another property to the object literal book object, does TypeScript allow it?
console.log(book);

// Question 3: Define an interface `Car` with the following properties:
// - make: string
// - model: string
// - year: number
// Then, create an object that conforms to this interface.
interface Car{
    make:string,
    model:string,
    year:number
}
const Porsche: Car = {
    make: "porsche AG",
    model: "911",
    year: 1964
} 

// Question 4: Define a type alias called `Car2` with the same shape as `Car`.
// Then, create an object that conforms to this type alias.
type Car2 = {
    make:string,
    model:string,
    year:number
}
const Porsche2: Car2 = {
    make: "porsche AG",
    model: "911",
    year: 1964
} 

// Question 5: Create an interface called `Car3` with the same shape as `Car`,
// but allow any additional properties to be added.
interface Car3{
    make:string,
    model:string,
    year:number
    [key: string]:any
}
const Porsche3: Car3 = {
    make: "porsche AG",
    model: "911",
    year: 1964,
    color: "gray",
    seat: 2
} 

console.log(Porsche);
console.log(Porsche2);
console.log(Porsche3);
