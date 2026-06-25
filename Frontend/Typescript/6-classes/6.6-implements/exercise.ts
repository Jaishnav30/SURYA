// Exercise: Understanding `implements` with Classes

// Question 1:
// Given the interface `Logger` below, create a class `ConsoleLogger`
// that implements the `Logger` interface and logs the message to the console.

interface Logger {
  log(message: string): string;
}

class ConsoleLogger implements Logger{
  log(msg:string):string{
    return msg;
  } 
}

console.log(new ConsoleLogger().log("yoooooo"));