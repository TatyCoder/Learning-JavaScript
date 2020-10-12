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

// An example for a factory functions: it's a function that produces another function:
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax; // I don't execute it, instead I just return a pointer at this function.
}

const calculateVatAmount = createTaxCalculator(0.19); // This holds the inner function.
// This also holds the inner function but configured with a different percentage:
const calculateIncomeTaxAmount = createTaxCalculator(0.25);
// So I call the outer function twice: it runs separately two times with different arguments for the tax %.

// I just need to call this calculateVatAmount function without passing in the value of
// tax percentage because I configured this once with the help of the factory function:
console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

/* Notes: A function inside of a function can access everything which is  
available outside of the inner function, because of the scope.
*/