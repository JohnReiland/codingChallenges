const {bigIntPow} = require('../16.powerDigitSum');

describe('bigIntPow()', () => {

  test('bigIntPow(2, 3) should be 8n', () => {
    expect(bigIntPow(2, 3)).toBe(8n);
  })

  test('bigIntPow(2, 60) should be 1152921504606846976n', () => {
    expect(bigIntPow(2, 60)).toBe(1152921504606846976n);
  })

})