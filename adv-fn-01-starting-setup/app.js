// An example for a pure function: it doesn't change anything outside of  
// the function and it always produces the same result for the same inputs:
function add(num1, num2) {
   return num1 + num2;
}

console.log(add(1, 5)); // 6
console.log(add(12, 15)); // 27

// An example for an impure function: I can't predict the output for a given input:
function addRandom(num1) {
    return num1 + Math.random();
}

console.log(addRandom(5)); // I get different results every time I reload the page.

// A function is also not to be considered pure if it introduces side effects:
let previousResult = 0;

function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum; // Side effect: it changes a variable that is defined outside the function.
    return sum;
}

console.log(addMoreNumbers(1, 5)); // 6

// Another example for a function with a side effect would be a   
// function that changes an object or an array that I pass into it:
const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
    h.push('NEW HOBBY');
    console.log(h);
}

printHobbies(hobbies); // (3) ["Sports", "Cooking", "NEW HOBBY"]
