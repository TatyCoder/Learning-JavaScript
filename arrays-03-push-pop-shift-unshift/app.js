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

const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');  // Push inserts elements at the end of the array

hobbies.unshift('Coding');  // Unshift inserts elements at the beginning of the array

hobbies.pop();  // Pop removes the last element 
// const poppedValue = hobbies.pop();  // Store the pop value to do anything with it if needed

hobbies.shift();  // Shift removes elements at the beginning of the array
console.log(hobbies);

// What shift does is to shift all elements in the array one place to the left
// and unshift does it to the right. These operations are slower than push & pop

hobbies[1] = 'Gardening';  // To replace an element at this index #
hobbies[5] = 'Painting';  // I will get empty spots in between...Rarely used! 
console.log(hobbies, hobbies[4]);  // Index 4 undefined