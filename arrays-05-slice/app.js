// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; // rarely used
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

const testResults = [1, 2.4, 5.3, 6.98, -7, 10];
console.log(testResults.slice());  // It returns a new array, it's a way of copying an array

//const storedResults = testResults; // These will be equal arrays, even if a push a new value in there (5.91)

//const storedResults = testResults.slice();  // A brand new array is created and stored in memory based on the old array
// where storedResults has 6 elements, and testResults has 7 because includes 5.91 (.push)

//const storedResults = testResults.slice(0, 2);  // Will copy the old array from index 0 thru 2 not included

const storedResults = testResults.slice(2);  // Will copy a selected range of the array starting at that index #

testResults.push(5.91);

console.log(storedResults, testResults);