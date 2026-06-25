// Exercise 1: Change the class below to use a static field `pi`
// and a static method `calculateArea` that accepts a radius.

class Circle {
  static pi: number = 3.14;
  static radius: number;
  calculateArea(radius:number): number {
    return Circle.pi * Circle.radius * Circle.radius;
  }
}

// Exercise 2: Create a class `Counter` with a private static field `count`
// that tracks of the number of instances created.
// Include a `getCount` method that returns the current count.
class Counter{
  private static count=1;
  get getCount(){
    return Counter.count++;
  }
}

const o1=new Counter();
const o2=new Counter();
const o3=new Counter();
const o4=new Counter();
console.log(o4.getCount);