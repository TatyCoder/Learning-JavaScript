// const ids = new Set();  // An empty set
// console.log(ids);  // Set(0) {}

const ids = new Set([1, 2, 3]);  // Passing in an array
console.log(ids);  // Set(3) {1, 2, 3}
console.log(ids.has(1));  // true

ids.add(2);  // Adding a number that is already there
console.log(ids.has(2));  // true, but we don't know how often it is stored in there
console.log(ids);  // Set(3) {1, 2, 3} 
// It still has only 3 elements, the value of 2 still only exists once in there

/*
In a set every value can only be stored once, so you typically don't want to  
retrieve a value from there, instead you can check if it has a certain value.
Set it's a data storage that basically tells you whether it contains something or not.
In a set a value is guaranteed to be unique. Set is useful to manage ID's app.
*/

for (const entry of ids.entries()) { 
    console.log(entry);  // (2) [1, 1]  (2) [2, 2]  (2) [3, 3]
}
// Entries returns an iterable of [v, v] pairs for every value in the set

// const ids = new Set(['Hi', 'from', 'set!']);
// ids.add(2);
// if (ids.has('Hi')) {
//   ids.delete('Hi');
// }

// for (const entry of ids.entries()) {
//     console.log(entry[0]); 
// }
// [0] to access the first element in the entry, so I just get one value (not pairs)


// Alternatively, use values() instead of entries() to return an iterable that only 
// yields the set values once:

for (const entry of ids.values()) {
    console.log(entry);  
}