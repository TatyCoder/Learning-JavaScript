const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'lightblue';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

let person = {
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  [userChosenKeyName]: '...',  // It will search for a variable of that name and take the value stored in that variable or constant
  greet: function() {
    alert('Hi there!');
  },
  1.5: 'hello'  // I can use numbers (and symbols) for property names
};

// ...

// person.age = 31;
delete person.age;
// person.age = undefined;
// person.age = null;
person.isAdmin = true;

const keyName = 'first name';

console.log(person[keyName]);
console.log(person[1.5]);  // I don't need '' around numbers
console.log(person);