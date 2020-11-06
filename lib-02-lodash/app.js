const customers = ['Max', 'Manuel', 'Anna'];

const activeCustomers = ['Max', 'Manuel'];

const inactiveCustomers = _.difference(customers, activeCustomers);
// The _ is a variable defined by Lodash.

console.log(inactiveCustomers);