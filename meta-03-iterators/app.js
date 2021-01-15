// Library land:
const uid = Symbol();
console.log(uid);

const user = {
  // id: 'p1',
  [uid]: 'p1',
  name: 'Max',
  age: 30,
  [Symbol.toStringTag]: 'User'
};

user[uid] = 'p3';

// app land => Using the library:

user.id = 'p2';

console.log(user[Symbol('uid')]);
console.log(Symbol('uid') === Symbol('uid'));
console.log(user.toString());

const company = {
  curEmployee: 0,
  employees: ['Max', 'Manu', 'Anna'],
  // It turns into an iterator by adding the next method:
  next() {
    if (this.curEmployee >= this.employees.length) {
      return { value: this.curEmployee, done: true };  // true: to signal that I'm done looping through that.
    }
    const returnValue = {
      value: this.employees[this.curEmployee],
      done: false  // false: to signal whether I got more values I can output or not.
    };
    this.curEmployee++;
    return returnValue;
  }
};

// console.log(company.next());  // Logs: {value: "Max", done: false}
// console.log(company.next());  // Logs: {value: "Manu", done: false}
// console.log(company.next());  // Logs: {value: "Anna", done: false}
// console.log(company.next());  // Logs: {value: 3, done: true}

// Creating a while loop instead:
let employee = company.next();

while(!employee.done) {  // As long as employee is not done I continue looping.
  console.log(employee.value);
  employee = company.next();  // This overwrites the value of employee.
}

/* Notes: An iterator is an object which has a next method, which then in turn returns a result of a certain structure. */