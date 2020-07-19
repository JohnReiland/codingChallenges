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

  test('letterCount(77) should be 13', () => {
    expect(letterCount(77)).toBe(13)
  })

  test('letterCount(189) should be 20', () => {
    expect(letterCount(189)).toBe(20)
  })

  test('letterCount(810) should be 15', () => {
    expect(letterCount(810)).toBe(15)
  })

})