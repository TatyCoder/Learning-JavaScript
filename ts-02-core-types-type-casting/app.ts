const num1Input = document.getElementById('num1') as HTMLInputElement;  
// If I hover over getElementById, the Typescript only infers that this is of type HTMLElement.
// With type casting I can override the inference made by Typescript, in this case: as HTMLInputElement.
// If I now hover over num1Input, I see what's stored in there is a HTMLInputElement.
// I can also use angle brackets for type casting:
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonElement = document.querySelector('button');

function add(a: number, b: number) {
  return a + b;
}

function printResult(result) {
  console.log(result);
}

// const result = add(5, 3);
// let isDone = false;

// printResult(result);

buttonElement.addEventListener('click', () => {
  const num1 = +num1Input.value; 
  const num2 = +num2Input.value;  
  const result = add(num1, num2);  
  printResult(result);
});

/* Notes: the value property on an input element always returns a string, no matter which type this 
input is of. To change this I add a plus in front of both value to cast the string into a number. */