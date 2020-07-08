const largestProductInGrid = require('../11.largestProductInGrid');

/*
test('Given a string able to construct a 2x2 grid, output 2', () => {
  expect(largestProductInGrid('01 01 01 01')).toBe(2);
})

test('Given a string able to construct a 3x3 grid, output 3', () => {
  expect(largestProductInGrid('01 01 01 01 01 01 01 01 01')).toBe(3);
})

test('Given a string able to construct a 5x5 grid, output 5', () => {
  expect(largestProductInGrid('01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01')).toBe(5);
})

*/

test('Existential: function "largestProductInGrid" should exist', () => {
  expect(largestProductInGrid('01 01 01 01')).toBeDefined();
})

test('Functional: Given a 2x2 grid of "01 01 01 01", output should be [["01", "01"], 1]', () => {
  expect(largestProductInGrid('01 01 01 01')).toStrictEqual([['01', '01'], 1]);
})

test('Horizontal: Given a 2x2 grid of "02 02 01 01", output should be [["02", "02"], 4]', () => {
  expect(largestProductInGrid('02 02 01 01')).toStrictEqual([['02', '02'], 4]);
})

test('Horizontal: Given a 3x3 grid of "01 03 05 01 00 99 01 01 01", output should be [["01", "03", "05"], 15]', () => {
  expect(largestProductInGrid('01 03 05 01 00 99 01 01 01')).toStrictEqual([['01', '03', '05'], 15]);
})

test('Horizontal: Given a 3x3 grid of "01 03 05 01 00 99 01 01 01", adjacency 2, output should be [["03", "05"], 15]', () => {
  expect(largestProductInGrid('01 03 05 01 00 99 01 01 01', 2)).toStrictEqual([['03', '05'], 15]);
})

test('Horizontal: Given a 3x3 grid of "01 03 05 01 00 99 01 01 01", adjacency 1, output should be [["99"], 99]', () => {
  expect(largestProductInGrid('01 03 05 01 00 99 01 01 01', 1)).toStrictEqual([['99'], 99]);
})

/*

test('Vertical: Given a 2x2 grid of "02 01 02 01", output should be [["02", "02"], 4]', () => {
  expect(largestProductInGrid('02 01 02 01')).toStrictEqual([['02', '02'], 4]);
})

test('Major Diagonal: Given a 2x2 grid of "02 01 01 02", output should be [["02", "02"], 4]', () => {
  expect(largestProductInGrid('02 01 01 02')).toStrictEqual([['02', '02'], 4]);
})

test('Minor Diagonal: Given a 2x2 grid of "01 02 02 01", output should be [["02", "02"], 4]', () => {
  expect(largestProductInGrid('01 02 02 01')).toStrictEqual([['02', '02'], 4]);
})

*/