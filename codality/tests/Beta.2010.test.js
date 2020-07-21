const {numberOfDiscIntersections} = require('../Beta.2010');

descibe('numberOfDiscIntersections()', () => {

  test('numberOfDiscIntersections([1, 5, 2, 1, 4, 0]) should be 11', () => {
    expect(numberOfDiscIntersections([1, 5, 2, 1, 4, 0])).toBe(11);
  })

})