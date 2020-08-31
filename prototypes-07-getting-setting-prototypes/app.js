class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person {
  name = 'Max';

  constructor() {
    // super();
    this.age = 30;
    // this.greet = function() { ... }
  }

  // greet = () => {
  //   console.log(
  //     'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
  //   );
  // };

  greet() {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  }
}

// =========================

// function Person() {
//   this.age = 30;
//   this.name = 'Max';
//   // this.greet = function() { ... };
// }

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

// const p = new Person();
// const p2 = new Person();
// p.greet();
// console.log(p);

// const button = document.getElementById('btn');
// button.addEventListener('click', p.greet.bind(p));

// =========================

// New Object():
const course = {
  title: 'JavaScript - The Complete Guide',
  rating: 5
};

// console.log(course.__proto__);  // default object.prototype
// console.log(Object.getPrototypeOf(course)); // Logs the same. It's the official way but longer.

/* I can override the prototype of any object, including objects that were created based on 
my own constructor function, by using Object.setPrototypeOf. 
.setPrototypeOf takes two parameters: the object where I want to set the prototype and the 
prototype I want to use.
If I want to keep the original prototype and only add something to it, I can use the spread 
operator and access Object.get.Prototype(course):
*/
Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRating: function() {
    console.log(`${this.rating}/5`);
  }
});
// So this is how we could set a prototype after the object has been created.

/* New way of creating an object. Object.create takes an object as a parameter, and  
creates an empty object, but it does create it with a prototype of my choice.
Note: object.create also takes a second argument which would take the property descriptor 
map where I then also can add properties if I want to create a non-empty object:
*/
const student = Object.create({
  printProgress: function() {
    console.log(this.progress);
  }
}, {
  name: {
    configurable: true,
    enumerable: true,
    value: 'Max',
    writable: true
  }
});

// If I then want to add something to the empty object I can do that by using the dot notation:
// student.name = 'Max';

// Another way of adding properties to an empty object is with the property descriptor map:
Object.defineProperty(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false
});

student.printProgress();

console.log(student);

course.printRating();
