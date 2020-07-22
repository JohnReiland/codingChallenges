const {prefixSet} = require('../Alpha.2010');

describe('prefixSet()', () => {

  test('prefixSet([2, 2, 1, 0, 1]) should be 3', () => {
    expect(prefixSet([2, 2, 1, 0, 1])).toBe(3);
  })

})