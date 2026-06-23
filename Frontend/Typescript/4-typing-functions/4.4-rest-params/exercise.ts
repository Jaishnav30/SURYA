// Exercise 1: Create a function called `joinStrings` that takes any
// number of string arguments and returns them concatenated into a single string.
// Example: joinStrings('Hello', ' ', 'World') should return 'Hello World'.
function joinStrings(...val){
    console.log(...val);
}
joinStrings('Hello', ' ', 'World');
// Exercise 2: Create a function called `multiply` that takes a multiplier
// and any number of arguments, and returns an array of the arguments each multiplied by the multiplier.
// Example: multiply(2, 1, 2, 3) should return [2, 4, 6].
function multiply(multiplyer:number, ...args){
    return args.map(i => i*2);
}
console.log(multiply(2, 1, 2, 3));