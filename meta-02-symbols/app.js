// Library land:
const uid = Symbol();  // I don't have to add the identifier, but I can add one here so that I can identify a symbol.
console.log(uid);

// Using the symbol as a key, instead of adding an ID like this, to avoid that an user could change the id:
const user = {
  // id: 'p1', 
  // Using this symbol as an identifier with dynamic property [] => [variable which holds the key name I want to use]:*  
  [uid]: 'p1',
  name: 'Max',
  age: 30,
  // Symbol.toStringTag allows me to define a string tag as a value, which will be part of the output that is generated:
  [Symbol.toStringTag]: 'User' 
};

user[uid] = 'p3';  // I can change it if I use that exact same symbol.

// app land => Using the library:

user.id = 'p2'; // By adding the symbol this change should not be possible by an user!

console.log(user);  // Logs: {name: "Max", age: 30, id: "p2", Symbol(): "p3"}
console.log(user[Symbol('uid')]);  // Logs: undefined => because this technically is a new symbol, and a different object.
console.log(Symbol('uid') === Symbol('uid'));  // Logs: false => these are not equal.
console.log(user.toString());  // To convert the object to a string, logs: [object User]

/* Notes: this symbol is hidden away from the users of my library, users got no way of accessing this property. */ 