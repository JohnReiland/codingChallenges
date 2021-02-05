const { majorityElement } = require("../169.majorityElement");

describe("majorityElement()", () => {
  test("majorityElement([3,2,3]) should be 3", () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });

  test("majorityElement([2,2,1,1,1,2,2]) should be 2", () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  test("majorityElement([-2,-2,1,1,1,-2,-2]) should be -2", () => {
    expect(majorityElement([-2, -2, 1, 1, 1, -2, -2])).toBe(-2);
  });

  test.skip("majorityElement(nums) should be result", () => {
    expect(majorityElement(nums)).toBe(result);
  });
});
