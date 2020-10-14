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

//New variable:
let multiplier = 1.1;

// Changed, adding multiplier:
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// Changing the multiplier to a different value:
multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

/* Notes: Every function in Javascript is a closure: because every function closes 
over the surrounding environment which means it registers the surrounding environment 
and the variables registered there and it memorizes the values of these variables.
Each function has its own lexical environment and I have a global environment as well.
When a function is created, then this function creates a new lexical environment 
and registers any variables it has access to inside of this environment.
Each function registers its surrounding environments and the variables that are 
defined in there and if these variables change and this function uses such a variable, 
then it takes the latest value for that variable.
*/