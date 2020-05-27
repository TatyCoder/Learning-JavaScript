/* -- var vs let:

let name = 'Max';
let hobbies; // I declared here so I can use it everywhere

if (name === 'Max') {
    hobbies = ['Sports', 'Cooking']; // I assigned the values for hobbies here, for example
    console.log(hobbies);
}

function greet() {
    let age = 30;
    let name = 'Anna';
    console.log(name, age, hobbies);
}

// console.log(name, age); ==> I will get an error: age is not defined, because isn't a global letiable
console.log(name, hobbies);

greet();


-- Quiz #12, question 3:

'use strict';

console.log(name);
const name = 'Max;

console.log(name);
var name = 'Max';
*/


//-- Heap & Stack Example:

function getName() {
    return prompt('Your name: ', '');
}

function greet() {
    const userName = getName();
    console.log('Hello ' + userName);
}

greet();