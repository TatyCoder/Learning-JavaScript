// class User {
//   name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

interface Greetable {
  name: string;
}

interface Printable {
  print(): void;
}

class User implements Greetable, Printable {
  constructor(public name: string, private age: number) {}

  print() {
    console.log(this.name);
  }
}

class Admin extends User {
  constructor(name: string, age: number, private permissions: string[]) {
    super(name, age);
  }
}

const user = new User('Max', 30);
console.log(user.name);

const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonElement = document.querySelector('button')!;
// By adding ! at the end, it tells Typescript this will never be null (and no error will show on "strict" mode).

function add(a: number, b: number) {
  return a + b;
}

type PrintMode = 'console' | 'alert';
enum OutputMode {
  CONSOLE,
  ALERT
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

interface CalculationContainer {
  res: number;
  print(): void;
}

type CalculationResults = CalculationContainer[];

const results: Array<CalculationContainer> = [];
const names = ['Max'];

buttonElement.addEventListener('click', () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultContainer = {
    res: result,
    print() {
      console.log(this.res);
    }
  };
  results.push(resultContainer);
  // results.push(5);
  // results[0].print();
  printResult(result, OutputMode.CONSOLE);
  printResult(result, OutputMode.ALERT);
  // printResult(result, 'window');
});

function logAndEcho<T>(val: T) {
  console.log(val);
  return val;
}

logAndEcho<string>('Hi there!').split(' ');