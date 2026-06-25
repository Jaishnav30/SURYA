// Question 1: Create an instance of the class below.

class Book {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  describe() {
    console.log(
      `This book is titled "${this.title}" and is authored by ${this.author}.`
    );
  }
}
const b=new Book("WOF", "APJ");
b.describe();
// Question 2: Create a new object of type `Tree` below.

type Tree = {
  height: number;
  age: number;
};
const t:Tree = {
    height:10,
    age:50
}
// Question 3: Create a new object of type `Car` below.

interface Car {
  make: string;
  model: string;
  year: number;
}

const c:Car = {
    make:"a",
    model:'b',
    year:2002
}