// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class Person extends AgedPerson {
//   name = 'Max';

//   constructor() {
//     super();
//     this.age = 30;
//   }

//   greet() {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   }
// }

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.__proto__);

// =========================

function Person() {
  this.age = 30;
  this.name = 'Max';
  this.greet = function() {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  };
}

Person.prototype = {
  printAge() {
    console.log(this.age);
  }
}; // Instead of {constructor: ƒ} it will log a new object:
/* {printAge: ƒ}
printAge: ƒ printAge()
__proto__: Object
*/

console.dir(Person); //
/* ƒ Person()
arguments: null
caller: null
length: 0
name: "Person"
prototype: {constructor: ƒ}  // Does NOT exist on every object, it exists on function objects.
__proto__: ƒ ()  // It's present on every object in Javascript, no matter how you created it.
[[FunctionLocation]]: app.js:22
[[Scopes]]: Scopes[2]
*/

const p = new Person();
p.greet();  // Hi, I am Max and I am 30 years old.
p.printAge();  // 30
console.log(p.toString());  // [object Object]
console.log(p); // 
/* Person {age: 30, name: "Max", greet: ƒ}
age: 30
greet: ƒ ()
name: "Max"
__proto__: Object 
*/
console.log(p.__proto__); // 
/* {constructor: ƒ}
constructor: ƒ Person()
__proto__: Object
This is the default object every custom constructor function assigns to an object based on it.
*/

console.log(p.__proto__ === Person.prototype); // true
// These are exactly the same objects, not copies, exactly the same object in memory.

// So in the end, when I create a class that extends something, I'm informing Javascript that 
// I want to set the prototype to a new object or add new methods and properties to that 
// prototype to be precise.