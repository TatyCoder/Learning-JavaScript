// Change const for let so I can assign a new value to person:
let person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function() {
    alert('Hi there!');
  }
};

/*
person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function() {
    alert('Hi there!');
  },
  isAdmin: true
};
*/

// Don't repeat code (as above). Instead use the dot notation to assign a new value:
person.isAdmin = true;
person.age = 31;  // To overwrite an existing value
delete person.age;  // To delete a property
// person.age = undefined;  // Another way of getting rid of a property, but isn't 'clean' code
// person.age = null;  // To reset or clear something

console.log(person);