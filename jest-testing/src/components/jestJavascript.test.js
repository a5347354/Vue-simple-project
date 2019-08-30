const sum = require('./jestJavascript');

test('1 + 2 等於 3', () => {
  expect(sum(1, 2)).toBe(3);
});