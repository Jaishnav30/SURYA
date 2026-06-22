"use strict";
// Exercise: TypeScript Classes
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Create a class called `Person` with the following properties:
//    - firstName: string
//    - lastName: string
//    - age: number
//    - fullName: a method that returns the full name of the person
class Person {
    firstName;
    lastName;
    age;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// 2. Create a class called `Student` that extends the `Person` class with the following extra properties:
//    - studentId: number
//    - courses: string[]
//    - enroll: a method that takes a course name as a parameter and adds it to the courses array
class Student extends Person {
    studentId;
    courses;
    constructor(firstName, lastName, age, studentId) {
        super(firstName, lastName, age);
        this.studentId = studentId;
        this.courses = [];
    }
    enroll(course) {
        this.courses.push(course);
    }
}
// 3. Create an instance of the `Student` class and demonstrate the usage of its properties and methods.
const student = new Student("John", "Doe", 20, 12345);
console.log(student.fullName()); // Output: John Doe
student.enroll("Math");
student.enroll("Science");
console.log(student.courses); // Output: ['Math', 'Science']
