const greet = require('./app');

test('greet() should return correct greeting', () => {
  expect(greet('Jaideep')).toBe('Hello, Jaideep!');
});

