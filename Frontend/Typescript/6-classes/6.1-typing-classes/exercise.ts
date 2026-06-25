// Exercise: TypeScript Classes

// 1. Create a class called `Person` with the following properties:
//    - firstName: string
//    - lastName: string
//    - age: number
//    - fullName: a method that returns the full name of the person
class Person{
    firstName: string
    lastName: string
    age: number
    constructor(firstName:string, lastName:string, age:number){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
    }
    fullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
// 2. Create a class called `Student` that extends the `Person` class with the following extra properties:
//    - studentId: number
//    - courses: string[]
//    - enroll: a method that takes a course name as a parameter and adds it to the courses array
class Student extends Person{
    studentId: number
    courses: string[]
    constructor(fn:string, ln:string, age:number, sid:number, crs:string[]){
        super(fn, ln, age)
        this.studentId=sid
        this.courses=crs
    }
    addCourse(course:string){
        console.log(this.courses);
        this.courses.push(course); 
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.age);
        this.fullName();
        console.log(this.studentId);
        console.log(this.courses);
    }
}
// 3. Create an instance of the `Student` class and demonstrate the usage of its properties and methods.
const courses: Array<string> = ["Eng", "Kan"]
const stud = new Student("Jai", "Kal",21,111,courses);
stud.addCourse("Astronomy");