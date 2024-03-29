function add(num1, num2) {
  return num1 + num2;
}

// function sendDataToServer() {}

console.log(add(1, 5)); // 6
console.log(add(12, 15)); // 27

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
  h.push('NEW HOBBY');
  console.log(h);
}

printHobbies(hobbies);

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let userName = 'Max';

function greetUser() {
  // let name = 'Anna';
  console.log('Hi ' + name);
}

let name = 'Maximilian';

userName = 'Manuel';

greetUser();

// New function:
// function powerOf(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;  // the shortcut for: result = result * x;
//   }

//   return result;
// }

// Another way, with the concept of recursion or a recursive function,  
// which means that the function calls itself:
function powerOf(x, n) {

  // To specify an exit condition so it doesn't lead to an infinite loop:
  // if (n === 1) {
  //   return x;
  // }
  // return x * powerOf(x, n - 1);  // This lead to an infinite loop.

  // The shortest possible way would be to return a ternary expression:
  // Where I check n equals one and if (?) that is the case, I return x, 
  // otherwise (:) I perform the operation:
  return n === 1 ? x : x * powerOf(x, n - 1);
  }

console.log(powerOf(2, 3)); // 2 * 2 * 2