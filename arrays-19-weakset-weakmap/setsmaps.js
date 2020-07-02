// const ids = new Set(['Hi', 'from', 'set!']);
// ids.add(2);
// if (ids.has('Hi')) {
//   ids.delete('Hi');
// }

// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }

// const person1 = { name: 'Max' };
// const person2 = { name: 'Manuel' };

// const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

// personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for (const value of personData.values()) {
//   console.log(value);
// }

// console.log(personData.size);

let person = {name: 'Max'};
const persons = new WeakSet();
// In WeakSet it has to be object data to be precise (and arrays, since they're objects)
persons.add(person);

// person = null;  // To clear person

/* WeakSet allows garbage collection to delete items that are part of  
the set as long as no other part of your code uses these items */

console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra info!');

person = null;

console.log(personData);

/*
WeakMmap and WeakSet can help manage memory more efficient in large 
applications where you have data which is fine to be deleted at some point
*/