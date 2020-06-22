const numbers = [1, 2, 3];
console.log(numbers); // (3) [1, 2, 3]

//const moreNumbers = new Array();  // With new Array()
//console.log(moreNumbers);  // [] empty

//const moreNumbers = new Array(4, 5);
//console.log(moreNumbers);  // (2) [4, 5]

//const moreNumbers = new Array(6);  // With 1 number will create an empty array with that number length
//console.log(moreNumbers);  // (6) [empty x 6]

const moreNumbers = Array(7, 8);  // With Array()
console.log(moreNumbers);  // (2) [7, 8]

const yetMoreNumbers = Array.of(1, 2);  // With Array.of()
console.log(yetMoreNumbers);  // (2) [1, 2]

const moreMethods = Array.from('Hi!');  // With Array.from, I must not pass in multiple arguments 
console.log(moreMethods);  // (3) ["H", "i", "!"]