const age = [30, 29, 54];

age.push(60);  // Adds an item at the end of an array.
// Constant Time Complexity = O(1), because the other items are not affected.

age.unshift(10);  // Adds an item at the beginning of an array.
// That means all items effectively have to be moved to the right so I have to reassign indexes.
// Linear Time Complexity = O(n), because it affects all existing items.

console.log(age);  // logs: [10, 30, 29, 54, 60]

const myAge = age[1];  
// Constant Time Complexity = O(1), because it doesn't need to look at all the other items.

const nameMap = { 
    'Max': 5 , 
    'Anna': 6
};

const usagesAnna = nameMap['Anna']; 
// Constant Time Complexity = O(1), because it instantly gives the value that's stored for the key.
