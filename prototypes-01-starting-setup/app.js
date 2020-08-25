// == Class ==

// class Person {
//     name = 'Max';

//     constructor() {
//         this.age = 30;
//     }

//     greet() {
//         console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
//     }
// }

// const person = new Person();
// person.greet();


// == Constructor function ==

function Person() { // With uppercase 
    this.name = 'Max';
    this.age = 30;
    this.greet = function() {
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
    };
}

const person = new Person();  // It only returns an object because of the 'new' keyword.
person.greet();

/* What the 'new' keyword does behind the scenes is it executes such a function, 
in there it sets 'this' equal to the object {}, that's going to be created, so equal 
to an empty object initially (if you will), then it adds all these properties to 
this empty object and then it 'returns this' and 'this' is the object:

function Person() {
    this = {};
    this.name = 'Max';
    this.age = 30;
    this.greet = function() {
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
    };
    return this;
}
*/