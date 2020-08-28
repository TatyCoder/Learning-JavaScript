class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = 'Max';

  constructor() {
    super();
    this.age = 30;
  }

  greet() {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  }
}

const p = new Person();
console.log(p);
const p2 = new Person();
console.log(p2);
console.log(p.__proto__ === p2.__proto__); // true
// Because they're using the exact same object in memory.

// =========================

// function Person() {
//   this.age = 30;
//   this.name = 'Max';
//   this.greet = function() {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   };
// }

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

/* 
The difference between the prototype property on constructor functions where you configure 
what will be added to objects that are created based on that constructor function; and 
the __proto property which is available on every object, not just on constructor functions 
or function objects which in the end points to the prototype that has been assigned to this
object, so to the fallback object that has been assigned to that object.
*/