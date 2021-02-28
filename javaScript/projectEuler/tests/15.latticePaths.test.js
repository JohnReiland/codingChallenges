const { arraySum, latticePaths } = require("../15.latticePaths");

/*

describe('nextSequence()', () => {

  test('nextSequence("01") should be "10"', () => {
    expect(nextSequence('01')).toBe('10');
  })

})

describe('allSequences()', () => {

  test('allSequences(1) should be ["01", "10"]', () => {
    expect(allSequences(1, 1)).toStrictEqual(['01', '10']);
  })

  test('allSequences(1) should be ["01", "10"]', () => {
    expect(allSequences(2, 2)).toStrictEqual(['0011', '0101', '0110', '1001', '1010', '1100']);
  })

})

*/

describe("arraySum()", () => {
  test("arraySum([1, 2, 3]) should be 6", () => {
    expect(arraySum([1, 2, 3])).toBe(6);
  });

  test("arraySum([1, 2, 3, 4, 5]) should be 15", () => {
    expect(arraySum([1, 2, 3, 4, 5])).toBe(15);
  });
});

describe("latticePaths()", () => {
  test("latticePaths(1) should be 2", () => {
    expect(latticePaths(1)).toBe(2);
  });

  test("latticePaths(2) should be 6", () => {
    expect(latticePaths(2)).toBe(6);
  });

  test("latticePaths(3) should be 20", () => {
    expect(latticePaths(3)).toBe(20);
  });

  test("latticePaths(10) should be 184756", () => {
    expect(latticePaths(10)).toBe(184756);
  });

  /*

  test('latticePaths(3, 1) should be 4', () => {
    expect(latticePaths(3, 1)).toBe(4);
  })

  test('latticePaths(3, 2) should be 6', () => {
    expect(latticePaths(3, 2)).toBe(10);
  })

  */
});
