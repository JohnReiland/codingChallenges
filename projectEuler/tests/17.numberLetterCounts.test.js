const {chart, letterCount} = require('../17.numberLetterCounts');

describe('chart[]', () => {

  test('chart[1][1] should be 3', () => {
    expect(chart[1][1]).toBe(3);
  })

  test('chart[19][1] should be 8', () => {
    expect(chart[19][1]).toBe(8);
  })

})

describe('letterCount()', () => {

  test('letterCount(77) should be 12', () => {
    expect(letterCount(77)).toBe(12)
  })

  test('letterCount(189) should be 23', () => {
    expect(letterCount(189)).toBe(23)
  })

  test('letterCount(189, true) should be 20', () => {
    expect(letterCount(189, true)).toBe(20)
  })

  test('letterCount(810) should be 15', () => {
    expect(letterCount(810)).toBe(15)
  })

  test('letterCount(2278) should be 36', () => {
    expect(letterCount(2278)).toBe(36)
  })

})