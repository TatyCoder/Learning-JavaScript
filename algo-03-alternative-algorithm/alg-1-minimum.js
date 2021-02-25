function getMin(numbers) {
  if (!numbers.length) {
    throw new Error('Should not be an empty array!');
  }
  let currentMinimum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < currentMinimum) {
      currentMinimum = numbers[i];
    }
  }

  return currentMinimum;
}

// Solving this differently with a new function:
function getMin2(numbers) {
  if (!numbers.length) {
    throw new Error('Should not be an empty array!');
  }

  // Two loops to sort the numbers in an ascending way:
  for (let i = 0; i < numbers.length; i++) {
    let outerElement = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      let innerElement = numbers[j];

      // Comparing the element in the outer loop with the one in the inner loop:
      if (outerElement > innerElement) {  
        // To swap the elements in the array so that I order them in an ascending way:
        numbers[i] = innerElement;
        numbers[j] = outerElement;  // [1, 3, 2] this will be the array after the swap for the first iteration.

        // I need to update these variables again to be correct:
        outerElement = numbers[i];  // => 1
        innerElement = numbers[j];  // => 3

        console.log(numbers[i], numbers[j]);  // 1st iteration: 1 & 3 => 2nd iteration: 2 & 3
      }
    }
  }

  return numbers[0];
}

const testNumbers = [3, 1, 2]; // 1st iteration: [1, 3, 2] => 2nd iteration: [1, 2, 3]

const min = getMin2(testNumbers);

console.log(min);
