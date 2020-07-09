const {findNextTriangle, divisors} = require('../12.highlyDivTriNum');

test('divisors(1) should return [1]', () => {
  expect(divisors(1)).toStrictEqual([1]);
});

test('divisors(3) should return [1, 3]', () => {
  expect(divisors(3)).toStrictEqual([1, 3]);
});

test('divisors(6) should return [1, 2, 3, 6]', () => {
  expect(divisors(6)).toStrictEqual([1, 2, 3, 6]);
});

test('divisors(10) should return [1, 2, 5, 10]', () => {
  expect(divisors(10)).toStrictEqual([1, 2, 5, 10]);
});

test('divisors(15) should return [1, 3, 5, 15]', () => {
  expect(divisors(15)).toStrictEqual([1, 3, 5, 15]);
});

test('divisors(21) should return [1, 3, 7, 21]', () => {
  expect(divisors(21)).toStrictEqual([1, 3, 7, 21]);
});

test('divisors(28) should return [1, 2, 4, 7, 14, 28]', () => {
  expect(divisors(28)).toStrictEqual([1, 2, 4, 7, 14, 28]);
});
