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

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// };

/*
A better approach is NOT to replace the old default object but instead, reach out   
to a protoype and dynamically add a new property or method by adding a dot and   
then the name of the property and then this can be a function:
*/
Person.prototype.printAge = function() {
  console.log(this.age);
};

console.dir(Person);

const p = new Person();
p.greet();
p.printAge();
console.log(p.__proto__);

// I can create more objects of the Person type by writing:
const p2 = new p.__proto__.constructor();
console.log(p2); //
/* Person {age: 30, name: "Max", greet: ƒ}
age: 30
greet: ƒ ()
name: "Max"
__proto__: Object
*/
// But using this code only makes sense when I don't have direct    
// access to the original constructor function anymore.