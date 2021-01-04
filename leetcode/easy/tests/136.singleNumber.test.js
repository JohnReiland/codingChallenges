const { singleNumber } = require("../136.singleNumber");

describe("singleNumber()", () => {
  test("singleNumber([2, 2, 1]) should be 1", () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });

  test("singleNumber([4, 1, 2, 1, 2]) should be 4", () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  });

  test("singleNumber([1]) should be 1", () => {
    expect(singleNumber([1])).toBe(1);
  });

  test.skip("singleNumber(nums) should be result", () => {
    expect(singleNumber(nums)).toBe(result);
  });
});
