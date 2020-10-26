const { maxPoints } = require('../149.maxPoints');

describe('maxPoints()', (), => {
  test('maxPoints([[1,1],[2,2],[3,3]]) should be 3', () => {
    expect(maxPoints([[1,1],[2,2],[3,3]])).toBe(3);
  })

  test('maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]) should be 4', () => {
    expect(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]).toBe(4);
  })
})