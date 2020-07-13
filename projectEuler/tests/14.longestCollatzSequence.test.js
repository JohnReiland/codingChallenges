const {findCollatz, longestCollatzSequence} = require('../14.longestCollatzSequence');

describe('findCollatz()', () => {

  test('findCollatz(13) should be 10', () => {
    expect(findCollatz(13)).toBe(10);
  })

});