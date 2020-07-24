const {countPalindromicSlices} = require('../Gamma.2011');

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

/*
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

*/

describe('countPalindromicSlices()', () => {

  test('countPalindromicSlices("baababa") should be 6', () => {
    expect(countPalindromicSlices('baababa')).toBe(6);
  })

  test('countPalindromicSlices("eiedeie") should be 5', () => {
    expect(countPalindromicSlices('eiedeie')).toBe(5);
  })

  test('countPalindromicSlices("aaaaa") should be 10', () => {
    expect(countPalindromicSlices('aaaaa')).toBe(10);
  })

  test('countPalindromicSlices("eieaaaaaeiea") should be 16', () => {
    expect(countPalindromicSlices('eieaaaaaeiea')).toBe(16);
  })

  test('countPalindromicSlices("eieaaaaaaaaaaaaaaaeiea") should be 111', () => {
    expect(countPalindromicSlices('eieaaaaaaaaaaaaaaaeiea')).toBe(111);
  })

})
