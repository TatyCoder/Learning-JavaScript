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

// Changed, removing next() and creating a generator function:
const company = {
  // curEmployee: 0,                  // This isn't getting called.
  employees: ['Max', 'Manu', 'Anna'],
  // next() {                         // This isn't getting called.
  //   if (this.curEmployee >= this.employees.length) {
  //     return { value: this.curEmployee, done: true };
  //   }
  //   const returnValue = {
  //     value: this.employees[this.curEmployee],
  //     done: false
  //   };
  //   this.curEmployee++;
  //   return returnValue;
  // },

  // This is how I create a generator:
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next();

    // while(!employee.done) {
    //   yield employee.value;  // Here instead of console logging I use the 'yield' keyword.
    //   employee = company.next();
    // }

    // Writing a new loop:
    let currentEmployee = 0;
    while(currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];  // 'yield' returns the thing after it as a value, as a result of this function.
      currentEmployee++;
    }
  }
};

// This code now inside the generator:
// let employee = company.next();

// while(!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

for (const employee of company) {
  console.log(employee);  // Logs: Max / Manu / Anna
}


// Using the spread operator:
console.log([...company]);  // Logs: (3) ["Max", "Manu", "Anna"]

// const it = company.getEmployee();

// console.log(it.next());  // Logs: {value: "Max", done: false}
// console.log(it.next());  // Logs: {value: "Manu", done: false}
// console.log(it.next());  // Logs: {value: "Anna", done: false}
// console.log(it.next());  // Logs: {value: undefined, done: true}

/* Notes: Javascript is actually not looking for next() when I use a 
for/of loop, instead what it is looking for is a special symbol. 

A generator is a special type of Javascript function which automatically 
generates an iterator (which is an object that has a next method). 

The spread operator also looks for this iterator symbol, it then goes 
through all the values I get there and adds them as elements in a new array.  
*/