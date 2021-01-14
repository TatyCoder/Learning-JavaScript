const uid = Symbol('uid');  // 'uid' is an unique identifier, which can't be accidentally overridden.
console.log(uid);

const person = {
    id: 'p1',
    name: 'Max',
    age: 30
};

// A consumer/user of the library could change the id with this:
person.id = 'p2';
console.log(person); // Logs: {id: "p2", name: "Max", age: 30}