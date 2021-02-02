const { containsDuplicate } = require("../217.containsDuplicate");

describe("containsDuplicate()", () => {
  test("containsDuplicate([1,2,3,1]) should be true", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  test("containsDuplicate([1,2,3,4]) should be false", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  test("containsDuplicate([1,1,1,3,3,4,3,2,4,2]) should be true", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  test.skip("containsDuplicate(nums) should be result", () => {
    expect(containsDuplicate(nums)).toBe(result);
  });
});
