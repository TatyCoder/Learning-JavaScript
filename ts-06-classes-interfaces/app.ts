// class User {
// In Typescript I have to add properties as fields every time I want to work with a property:
//   name: string;
//   private age: number;
// By adding private, a property is intended to be used from only inside the class.

// Then I work with them in the constructor:
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// This class will do exactly the same thing as the previous class did:
// class User { 
//   constructor(public name: string, private age: number) {}
// }

// Creating an interface: it define how an object type should look like. 
// I can also use interfaces as contracts in classes: to force classes to have a certain structure.
interface Greetable {
  name: string;
}

interface Printable {
  print(): void;
}

// Implementing interfaces (using the keyword 'implements'). 
// I can implement multiple interfaces by simply separating them with a comma:
class User implements Greetable, Printable {
  constructor(public name: string, private age: number) {}

  print() {
    console.log(this.name);
  }
}

// In Typescript, just as in Javascript, I can also inherit:
class Admin extends User {  // And this now allows me to add additional fields:
  constructor(name: string, age: number, private permissions: string[]) {
    super(name, age);
  }
}

const user = new User('Max', 30);
console.log(user.name);
// user.age => I get an error: Property 'age' is private and only accessible within class 'User'.

const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonElement = document.querySelector('button');

function add(a: number, b: number) {
  return a + b;
}

type PrintMode = 'console' | 'alert';
enum OutputMode {
  CONSOLE,
  ALERT,
}

function printResult(result: string | number, printMode: OutputMode) {
  if (printMode === OutputMode.CONSOLE) {
    console.log(result);
  } else if (printMode === OutputMode.ALERT) {
    alert(result);
  }
}

// const result = add(5, 3);
// let isDone = false;

// printResult(result);

// Creating an interface here:
interface CalculationContainer {
  res: number;
  print(): void;
}

// Then I can use the new interface and have an array of calculation containers:
type CalculationResults = CalculationContainer[];

const results: CalculationResults = [];
const names = ['Max'];

buttonElement.addEventListener('click', () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultContainer = {
    res: result,
    print() {
      console.log(this.res);
    },
  };
  results.push(resultContainer);
  // results.push(5);
  // results[0].print();
  printResult(result, OutputMode.CONSOLE);
  printResult(result, OutputMode.ALERT);
  // printResult(result, 'window');
});
