jest.mock('./http');

const { loadTitle } = require('./util');

test('should print an uppercase text', () => {
  loadTitle().then(title => {
    expect(title).toBe('DELECTUS AUT AUTEM');
  });
});

/* Notes: when this testing file gets executed, 'jest' goes ahead and replaces the http file with the mocked file. */