const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonElement = document.querySelector('button');

function add(a: number, b: number) {
  return a + b;
}

type PrintMode = 'console' | 'alert';  // This is an union type of literal types.
// type syntax: I define the type of data on the right side. I can use it in different places of my app.

function printResult(result: string | number, printMode: PrintMode) {  // Union types can be used with any types.
  if (printMode === 'console') {
    console.log(result);
  } else if (printMode === 'alert') {
    alert(result);
  }
}

// const result = add(5, 3);
// let isDone = false;

// printResult(result);

type CalculationResults = { res: number; print: () => void }[];

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
    }
  };
  results.push(resultContainer);
  // results.push(5);
  // results[0].print();
  printResult(result, 'console');
  printResult(result, 'alert');
  // printResult(result, 'window'); // I'll get an error because this is not allowed in my union type of literal types.
});
