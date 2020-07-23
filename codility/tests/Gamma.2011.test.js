const {count, countRun, countPalindromicSlices} = require('../Gamma.2011');

/*
describe('countEven()', () => {

  test('countEven("jsirrisj", 3) should be 4', () => {
    expect(countEven('jsirrisj', 3)).toBe(4);
  })

})

describe('countOdd()', () => {

  test('countOdd("jsirtrisj", 3) should be 4', () => {
    expect(countOdd('jsirtrisj', 3)).toBe(4);
  })

})
*/

describe('count()', () => {

  test('count("jsirzrisj", 3, 1) should be 4', () => {
    expect(count('jsirzrisj', 3, 1)).toBe(4);
  })

  test('count("jsirzrisj", 2, 3) should be 3', () => {
    expect(count('jsirzrisj', 2, 3)).toBe(3);
  })

})


describe('countRun()', () => {

  test('countRun("jfkdieaaaaaaaaaaaaaaajseg", 6) should be 105', () => {
    expect(countRun('jfkdieaaaaaaaaaaaaaaajseg', 6)).toBe(105);
  })

})
