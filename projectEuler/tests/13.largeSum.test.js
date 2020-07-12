const largeSum = require('../13.largeSum');

describe('largeSum()', () => {

  test('largeSum(["111", "111"]) should be "222"', () => {
    expect(largeSum(['111', '111'])).toBe('222');
  })

  test('largeSum(["111", "111", "111"]) should be "333"', () => {
    expect(largeSum(['111', '111', '111'])).toBe('333');
  })

  test('largeSum(["111111111111111111111111111111", "111111111111111111111111111111"]) should be "222222222222222222222222222222"', () => {
    expect(largeSum(['111111111111111111111111111111', '111111111111111111111111111111'])).toBe('222222222222222222222222222222');
  })

  test('largeSum("37107287533902102798797998220837590246510135740250", "46376937677490009712648124896970078050417018260538"]) should be "83484225211392112511446123117807668296927154000788"', () => {
    expect(largeSum(['37107287533902102798797998220837590246510135740250', '46376937677490009712648124896970078050417018260538'])).toBe('83484225211392112511446123117807668296927154000788');
  })

})