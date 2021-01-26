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
  // curEmployee: 0,
  employees: ['Max', 'Manu', 'Anna'],
  // next() {
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
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next();

    // while(!employee.done) {
    //   yield employee.value;
    //   employee = company.next();
    // }
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee];
      currentEmployee++;
    }
  }
};

// let employee = company.next();

// while(!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

for (const employee of company) {
  console.log(employee);
}

console.log([...company]);

// const it = company.getEmployee();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

const persons = ['Max', 'Manu'];
console.log(persons);

// Reflect API:

const course = {
  title: 'JavaScript - The Complete Guide'
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  }
});

// Reflect.deleteProperty(course, 'title');

// Object.deleteProperty(course, 'title');

// delete course.title;

console.log(course);

// In this object, I get certain handler functionalities, certain traps as they are called:
const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    if (propertyName === 'length') {
      return 0;
    }
    return obj[propertyName] || 'NOT FOUND';  // [] means that for the wrapped object, I access this propertyName.
  }
};

const pCourse = new Proxy(course, courseHandler);  // I wrap an extra object around the existing course object.
console.log(pCourse.title, pCourse.length, pCourse.rating);

/* Notes: proxy API allows me to tweak objects or add some extra functionality to my code that 
kicks in when other people work with it, which is called meta programming: I configure my code 
to behave in a certain way when other people use it.

The proxy constructor needs two arguments: the first argument is the object which I want to proxy, so which 
I want to wrap, the second argument is another object which defines certain handlers for the wrapped object.

The get method/trap takes two arguments which are passed in automatically by the proxy API: the object on  
which this get access happens which is the wrapped object, and the property name on which this happened. 

For example, if I try to access a rating property which doesn't exist, instead of getting the default 
value of undefined, I now get 'NOT FOUND'.
*/