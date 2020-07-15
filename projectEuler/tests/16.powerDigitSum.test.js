const {bigIntPow, sumBigInt, powerDigitSum} = require('../16.powerDigitSum');

describe('bigIntPow()', () => {

  test('bigIntPow(2, 3) should be 8n', () => {
    expect(bigIntPow(2, 3)).toBe(8n);
  })

  test('bigIntPow(2, 60) should be 1152921504606846976n', () => {
    expect(bigIntPow(2, 60)).toBe(1152921504606846976n);
  })

})

describe('sumBigInt()', () => {

  test('sumBigInt(23n) should be 5', () => {
    expect(sumBigInt(23n)).toBe(5);
  })

  test('sumBigInt(12345n) should be 15', () => {
    expect(sumBigInt(12345n)).toBe(15);
  })

})

describe('powerDigitSum()', () => {

  test('powerDigitSum(2, 4) should be 7', () => {
    expect(powerDigitSum(2, 4)).toBe(7);
  })

  test('powerDigitSum(2, 5) should be 5', () => {
    expect(powerDigitSum(2, 5)).toBe(5);
  })

})