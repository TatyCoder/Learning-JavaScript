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

/* This is NOT a property that will be added to objects created based on the constructor 
function. This has no impact on what executes the function body, it's just something 
you can interact with on the function object itself -> ƒ Person() has 'describe' now:
*/
Person.describe = function() {
  console.log('Creating persons...');
}

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// };

Person.prototype.printAge = function() {
  console.log(this.age);
};

console.dir(Person);

const p = new Person();
p.greet();
p.printAge();
console.log(p);
console.log(p.length); // undefined
/* Doesn't print 1 because the global object constructor function 
-> f Object() is NOT the fallback object of everything.
*/
console.log(p.toString()); // [object Object]
const p2 = new p.__proto__.constructor();

console.dir(Object); // ƒ Object():
/* Everything inside here are static methods and static properties of  
that object constructor function. It has its own __proto__.
*/
console.dir(Object.prototype); 
// Object.prototype is the fallback value of all objects! The prototype chain ends here.
console.dir(Object.prototype.__proto__); // null