const multiplesOf3And5 = require('../1.multiplesOf3And5');

test('sums all natural numbers below 3 that are multiples of 3 or 5 to equal 0', () => {
  expect(multiplesOf3And5(3)).toBe(0);
});

test('sums all natural numbers below 5 that are multiples of 3 or 5 to equal 3', () => {
  expect(multiplesOf3And5(5)).toBe(3);
});

test('sums all natural numbers below 6 that are multiples of 3 or 5 to equal 8', () => {
  expect(multiplesOf3And5(6)).toBe(8);
});

test('sums all natural numbers below 9 that are multiples of 3 or 5 to equal 14', () => {
  expect(multiplesOf3And5(9)).toBe(14);
});

test('sums all natural numbers below 10 that are multiples of 3 or 5 to equal 23', () => {
  expect(multiplesOf3And5(10)).toBe(23);
});

test('sums all natural numbers below 11 that are multiples of 3 or 5 to equal 33', () => {
  expect(multiplesOf3And5(11)).toBe(33);
});