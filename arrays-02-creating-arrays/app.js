const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);  // NodeList(3) [li, li, li] -> This is an array-like object and also an iterable

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);  // (3) [li, li, li] -> This is a real array

// Data you can store in arrays:
const hobbies = ['Cooking', 'Gardening'];  // Strings
console.log(hobbies);  // (2) ["Cooking", "Gardening"]

const personalData = [30, 'Max', {hobbies: ['Sports', 'Cooking']}];  // Numbers, strings, objects
console.log(personalData);  // (3) [30, "Max", {...}]
console.log(personalData[1]);  // Max

const analyticsData = [[1, 1.6], [-5.4, 2.3, 7.7]];  // Nested arrays or multi-dimensional arrays
console.log(analyticsData);  // (2) [Array(2), Array(3)]
for (const data of analyticsData) {
   for (const dataPoint of data) {
    console.log(dataPoint);  // 1  1.6  -5.4  2.3  7.7 (in separate lines)
   }
}