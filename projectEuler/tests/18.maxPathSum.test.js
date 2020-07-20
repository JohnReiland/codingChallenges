const {collapseRow, maxPathSum} =  require('../18.maxPathSum');

describe('collapseRow()', () => {

  test('collapseRow([1], [2, 3]) shoule be [4]', () => {
    expect(collapseRow([1], [2, 3])).toStrictEqual([4]);
  })

  test('collapseRow([1, 2, 3, 4], [5, 6, 7, 8, 9]) shoule be [7, 9, 11, 13]', () => {
    expect(collapseRow([1, 2, 3, 4], [5, 6, 7, 8, 9])).toStrictEqual([7, 9, 11, 13]);
  })

})

describe('maxPathSum()', () => {

  test('maxPathSum([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]) should be 23', () => {
    expect(maxPathSum([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]])).toBe(23);
  })

  test('maxPathSum([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3], [6, 4, 8, 2, 1]]) should be 31', () => {
    expect(maxPathSum([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3], [6, 4, 8, 2, 1]])).toBe(31);
  })

})