function getMin(numbers) {
  if (!numbers.length) { // If I have no length at all (Optional code: numbers.length === 0).
    throw new Error('Should not be an empty array!');
  }
  let currentMinimum = numbers[0];  // This initializes currentMinimum with the first number in the array (index 0).

  for (let i = 1; i < numbers.length; i++) {  // Here I start at the second number in the array (index 1).
    if (numbers[i] < currentMinimum) {
      currentMinimum = numbers[i];
    }
  }

  return currentMinimum;
}

const testNumbers = [3, 1, 2];

const min = getMin(testNumbers);

console.log(min);

/* Notes: numbers.length = 3.
i is smaller than the numbers.length. 
i isn't equal to numbers.length because it would exceed the array (the index starts at zero and ends at two). */