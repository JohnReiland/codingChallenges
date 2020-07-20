const {collapseRow} =  require('../18.maxPathSum');

describe('collapseRow()', () => {

  test('collapseRow([1], [2, 3]) shoule be [4]', () => {
    expect(collapseRow([1], [2, 3])).toStrictEqual([4]);
  })

  test('collapseRow([1, 2, 3, 4], [5, 6, 7, 8, 9]) shoule be [7, 9, 11, 13]', () => {
    expect(collapseRow([1, 2, 3, 4], [5, 6, 7, 8, 9])).toStrictEqual([7, 9, 11, 13]);
  })

})