const person = {
  name: 'Max',  // Properties are key-value pairs
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function() {  // If you store a function as a value on a certain key, then this is called a method
    alert('Hi there!');
  }
};

console.log(person.name);
person.greet();