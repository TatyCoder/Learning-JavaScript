const movieList = document.getElementById('movie-list');

// movieList.style.backgroundColor = 'lightblue';
movieList.style['background-color'] = 'lightblue';  // With [] notation
movieList.style.display = 'block';

let person = {
  'first name': 'Max',  // I can use any string (single or double quotes) as a key name
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  greet: function() {
    alert('Hi there!');
  }
};

// ...

// person.age = 31;
delete person.age;
// person.age = undefined;
// person.age = null;
person.isAdmin = true;

console.log(person);
console.log(person['first name']);  // I need square brackets to access that special key name