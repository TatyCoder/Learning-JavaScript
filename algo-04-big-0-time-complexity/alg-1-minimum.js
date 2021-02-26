function getMin(numbers) {
  if (!numbers.length) { // 1 execution (c1): doesn't depend on the number of items in the array.
    throw new Error('Should not be an empty array!');
  }
  let currentMinimum = numbers[0]; // 1 execution (n): depends on the array.
  // console.log('EXECUTION - INIT');

  for (let i = 1; i < numbers.length; i++) { // 1 execution: the loop itself executes once but then the code in the loop executes more often.
    // console.log('EXECUTION - FOR');
    if (numbers[i] < currentMinimum) { // 2 executions (c2): depends on the array. It will run twice because it doesn't run for the first item [i=1].
      currentMinimum = numbers[i]; // 0 to 2 executions depends on the concrete data I get, for this example: 1 execution.
    }
  }

  // console.log('EXECUTION - RETURN');
  return currentMinimum; // 1 execution (c3): doesn't depend on the number of items in the array.
}

const testNumbers = [3, 1, 2];

const min = getMin(testNumbers);

console.log(min);

// Time or number of executions: T = 1 + 2 + 1 =>  c1 + n*c2 + c3 =>  n because the constants don't really matter.
// c2 is the constant number of executions inside of the for loop. The if statement only runs once per loop iteration. So I have that constant value of 1 inside of the loop, for every loop iteration.
// T = n => Linear Time Complexity (Big O) => O(n) --> this simply depends linearly on the length of the array.

function getMin2(numbers) {
  if (!numbers.length) {
    throw new Error('Should not be an empty array!');
  }

  for (let i = 0; i < numbers.length; i++) {
    let outerElement = numbers[i]; // n executions: depends on the array.
    for (let j = i + 1; j < numbers.length; j++) {
      let innerElement = numbers[j]; // n executions: depends on the array.

      if (outerElement > innerElement) {
        // swap
        numbers[i] = innerElement;
        numbers[j] = outerElement;

        outerElement = numbers[i];
        innerElement = numbers[j];

        console.log(numbers[i], numbers[j]); // 1st iteration: 1 & 5
      }
    }
  }

  return numbers[0];
}

// Quadratic Time Complexity => n * n => O(n^2) --> this depends on each array I loop through: outer & inner.

const testNumbers2 = [5, 1, 5];

const min2 = getMin2(testNumbers2);

console.log(min2);
