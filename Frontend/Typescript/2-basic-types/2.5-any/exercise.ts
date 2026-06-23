// Exercise: Understanding the `any` type in TypeScript

// 1. Declare a variable with the `any` type and assign it a string value.
var abc: any = "string";
// 2. Reassign the variable to a number.
abc=123;
// 3. Reassign the variable to an object with a name property that's set to "TS".
let obj = {name:"TS"}
// obj=abc;
// console.log(obj);

// 4. Create a function that accepts a parameter of type `any` and logs its type and value.
const hey=function (para: any){
    console.log(typeof para, para);
}
hey(12);
// 5. Call the function with different types of arguments (string, number, object, array).
hey("hi");
hey(true);
hey(obj);
const arr: Array<number> = [1,2,3];
hey(arr);
// 6. Explain why using `any` can be both useful and potentially problematic in TypeScript.
