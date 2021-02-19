// Mocking this function:
const fetchData = () => {
  return Promise.resolve({ title: 'delectus aut autem' });  // Title in lowercase to actually test it.
};

exports.fetchData = fetchData;

/* Notes: with 'mocking' I mock features, which means I replace features I 
don't want in a test. Here I replaced fetchData with a mock: it will set up 
a function that will replace the real function when running the tests. */