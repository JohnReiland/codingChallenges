const { isValidMountain } = require("../941.isValidMountain");

describe("isValidMountain()", () => {
  test("isValidMountain([2,1]) should be false", () => {
    expect(isValidMountain([2, 1])).toBe(false);
  });

  test("isValidMountain([3,5,5]) should be false", () => {
    expect(isValidMountain([3, 5, 5])).toBe(false);
  });

  test("isValidMountain([0,3,2,1]) should be true", () => {
    expect(isValidMountain([0, 3, 2, 1])).toBe(true);
  });

  test.skip("isValidMountain(arr) should be result", () => {
    expect(isValidMountain(arr)).toBe(result);
  });
});
