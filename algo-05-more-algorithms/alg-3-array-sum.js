function sumUp(numbers) {
  let sum = 0; // 1 execution. No matter how many items are in the numbers array.

  for (let i = 0; i < numbers.length; i++) { // n executions.
    sum += numbers[i];  // sum = sum + numbers[i];
  }

  return sum; // 1 execution. No matter how many items are in the numbers array.
}

// Linear Time Complexity => O(n)
// n is the length of the array and I go through the entire array.
// The more items I feed in, the longer it takes.

const array = [1, 2, 5];

console.log(sumUp(array)); // logs: 8