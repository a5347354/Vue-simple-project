const sum = require('./jest-javascript');

test('1 + 2 等於 3', () => {
  expect(sum(1, 2)).toBe(3);
});