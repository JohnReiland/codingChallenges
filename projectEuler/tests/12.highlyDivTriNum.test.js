const {divisors, divisorsOfNthTriNum, highlyDivTriNum} = require('../12.highlyDivTriNum');


describe('divisors()', () => {

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

})

/*

describe('highlyDivTriNum()', () => {

  test('highlyDivTriNum(1) should be 3', () => {
    expect(highlyDivTriNum(1)).toBe(3);
  })

  test('highlyDivTriNum(2) should be 6', () => {
    expect(highlyDivTriNum(2)).toBe(6);
  })

  test('highlyDivTriNum(3) should be 6', () => {
    expect(highlyDivTriNum(3)).toBe(6);
  })

  test('highlyDivTriNum(4) should be 28', () => {
    expect(highlyDivTriNum(4)).toBe(28);
  })

  test('highlyDivTriNum(5) should be 28', () => {
    expect(highlyDivTriNum(5)).toBe(28);
  })

})

*/

describe('divisorsOfNthTriNum()', () => {

  test('divisorsOfNthTriNum should be 1', () => {
    expect(divisorsOfNthTriNum(1)).toBe(1);
  })

  test('divisorsOfNthTriNum(2) should be 2', () => {
    expect(divisorsOfNthTriNum(2)).toBe(2);
  })

  test('divisorsOfNthTriNum(7) should be 6', () => {
    expect(divisorsOfNthTriNum(7)).toBe(6);
  })

  test('divisorsOfNthTriNum(100) should be 12', () => {
    expect(divisorsOfNthTriNum(100)).toBe(12);
  })

})