const customers = ['Max', 'Manuel', 'Anna'];

const activeCustomers = ['Max', 'Manuel'];

const inactiveCustomers = customers - activeCustomers;

console.log(inactiveCustomers);  

/* Notes: this logs NaN, because I'm trying to do a subtraction with two values which are 
not a number. So getting the difference of two arrays doesn't work like that, instead I need 
to write a function which goes through each array and then checks if each item is part of  
each arrays, and then gives me the difference of arrays.
This is a typical use case where I can use a third-party package called Lodash.
*/