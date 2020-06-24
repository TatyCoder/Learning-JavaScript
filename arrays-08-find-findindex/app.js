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

const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// const storedResults = testResults.slice(2);
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(storedResults, testResults);
console.log(testResults.indexOf(1.5));

console.log(testResults.includes(10.99));
// includes determines whether an array includes a certain element, returning true or false

const personData = [{ name: 'Max' }, { name: 'Manuel' }];
console.log(personData.indexOf({ name: 'Manuel' }));

const nombre = personData.find((person, idx, persons) => {
  return person.name === 'Manuel';  // This will return TRUE for the element I'm looking for (and FALSE for all other elements)
});

console.log(nombre);  // {name: "Manuel"}

/* find is a method that takes an argument, but the argument it takes is actually 
a function that can accept up to three arguments. 
The first argument will always be a single object of that array,
the second argument will always be the index of that single element,
and the third argument will be the full array.
I can use it in any array, including full of objects.
find returns the same object as you have it in the array,
find doesn't create a copy of the object
*/

nombre.name = 'Anna';

console.log(nombre, personData);  // {name: "Anna"} & (2)[{...}, {...}]

const maxIndex = personData.findIndex((person, idx, persons) => {
  return person.name === 'Max';  // TRUE for Max
});

console.log(maxIndex);  // 0 (the index for Max)