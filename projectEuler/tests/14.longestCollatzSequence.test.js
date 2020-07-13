const {findCollatz, longestCollatzSequence} = require('../14.longestCollatzSequence');

describe('findCollatz()', () => {

  test('findCollatz(1) should be 1', () => {
    expect(findCollatz(1)).toBe(1);
  })

  test('findCollatz(2) should be 2', () => {
    expect(findCollatz(2)).toBe(2);
  })

  test('findCollatz(10) should be 7', () => {
    expect(findCollatz(10)).toBe(7);
  })

  test('findCollatz(13) should be 10', () => {
    expect(findCollatz(13)).toBe(10);
  })

})


describe('longestCollatzSequence()', () => {

  test('longestCollatzSequence(10) should be 9', () => {
    expect (longestCollatzSequence(10)).toBe(9);
  })

  test('longestCollatzSequence(20) should be 18', () => {
    expect (longestCollatzSequence(20)).toBe(18);
  })

})