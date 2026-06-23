// Exercise: Understanding `this` in TypeScript Functions

// Question 1:
// Create an object literal called `user` with a property `username` and a method `introduce`.
// The `introduce` method should return an introduction message that includes the
// `username` property using `this`.
const user = {
    username:"Jai",
    introduce(){console.log("hey "+this.username);}
}
user.introduce();
// Question 2:
// Create a class `Counter` with a property `count` initialized to 0 and a method `increment`.
// The `increment` method should increase the `count` property by 1 using `this`.
class Counter{
    count: number=0;
    increment(){
        this.count++;
        console.log(this.count);
    }
}
const cnt= new Counter();
cnt.increment();

// Question 3:
// Create a function `sayHello` that logs a greeting message for the person object below using `this`.
// Use the `call` method to invoke the `sayHello` function with the `person` object.
function sayHello(this:{username:string}){
    console.log("Hi, "+this.username);
}
const person = { username: "Alice" };
sayHello.call(person);