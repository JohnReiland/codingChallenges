const {nextSequence, allSequences} = require('../15.latticePaths');

describe('nextSequence()', () => {

  test('nextSequence("00") should be "01"', () => {
    expect(nextSequence('00')).toBe('01');
  })

  test('nextSequence("01") should be "10"', () => {
    expect(nextSequence('01')).toBe('10');
  })

  test('nextSequence("10") should be "11"', () => {
    expect(nextSequence('10')).toBe('11');
  })

})

describe('allSequences()', () => {

  test('allSequences(2) should be ["00", "01", "10", "11"]', () => {
    expect(allSequences(2)).toStrictEqual(['00', '01', '10', '11']);
  })

})
