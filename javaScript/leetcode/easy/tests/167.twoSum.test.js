const { twoSum } = require("../167.twoSum");

describe("twoSum()", () => {
  test("twoSum([2,7,11,15], 9) should be [1,2]", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 2]);
  });

  test("twoSum([2,3,4], 6) should be [1,3]", () => {
    expect(twoSum([2, 3, 4], 6)).toStrictEqual([1, 3]);
  });

  test("twoSum([-1,0], -1) should be [1,2]", () => {
    expect(twoSum([-1, 0], -1)).toStrictEqual([1, 2]);
  });

  test.skip("twoSum(numbers, target) should be result", () => {
    expect(twoSum(numbers, target)).toStrictEqual(result);
  });
});
