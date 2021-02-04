const { findLHS } = require("../594.findLHS");

describe("findLHS()", () => {
  test("findLHS([1,3,2,2,5,2,3,7]) should be 5", () => {
    expect(findLHS([1, 3, 2, 2, 5, 2, 3, 7])).toBe(5);
  });

  test("findLHS([1,2,3,4]) should be 2", () => {
    expect(findLHS([1, 2, 3, 4])).toBe(2);
  });

  test("findLHS([1,1,1,1]) should be 0", () => {
    expect(findLHS([1, 1, 1, 1])).toBe(0);
  });

  test.skip("findLHS(nums) should be result", () => {
    expect(findLHS(nums)).toBe(result);
  });
});
