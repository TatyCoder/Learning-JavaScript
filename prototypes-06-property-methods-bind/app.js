class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

// Changes and doesn't extends anymore:
class Person {
  name = 'Max';

  constructor() {
    // super();  // Remove 'super' because I'm not extending anything anymore.
    this.age = 30;
    // this.greet = function() { ... }  // Optional way to create a method.
  }

  /* Another way to create the method. Easier for binding eventListeners.
  This function is indeed created for every instance of this object, every instance 
  based on this class (it will log -> Person {name: "Max", age: 30, greet: ƒ}):
  */
  // greet = () => {
  //   console.log(
  //     'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
  //   );
  // };

  // Correct 'shorthand' (it will log -> Person {name: "Max", age: 30) without greet):
  greet() {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  }
}

const p = new Person();
const p2 = new Person();
p.greet();
console.log(p);

const button = document.getElementById('btn');
// button.addEventListener('click', p.greet);  // For the arrow function method
button.addEventListener('click', p.greet.bind(p));  // For the shorthand method, bind it to p.

// =========================

// function Person() {
//   this.age = 30;
//   this.name = 'Max';
//   // this.greet = function() { ... };
// }

// New way:
// Person.prototype.greet = function() {
//   console.log(
//     'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//   );
// };

// Person.describe = function() {
//   console.log('Creating persons...');
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// };

// Person.prototype.printAge = function() {
//   console.log(this.age);
// };

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.length);
// console.log(p.toString());
// const p2 = new p.__proto__.constructor();
// console.dir(Object.prototype.__proto__);