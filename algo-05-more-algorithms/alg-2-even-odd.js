function isEvenOrOdd(number) {
  // const result = number % 2;
  // if (result === 0) {
  //   return 'Even';
  // } else {
  //   return 'Odd';
  // }

// Shorter code using a ternary expression:
  return number % 2 ? 'Odd' : 'Even';
} 
// if that is truthy (?), so if that isn't zero, return 'Odd'; if it is falsy (:), so if it is 0, return 'Even'. 
// 0 is treated as a falsy value.

 // Constant Time Complexity => O(1). 
 // This always has exactly the same execution time, no matter which number I feed in.

console.log(isEvenOrOdd(10)); // Logs: Even
console.log(isEvenOrOdd(11)); // logs: Odd
