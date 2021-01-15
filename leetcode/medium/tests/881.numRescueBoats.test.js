const { numRescueBoats } = require("../881.numRescueBoats");

describe("numRescueBoats()", () => {
  test("numRescueBoats([1,2], 3) should be 1", () => {
    expect(numRescueBoats([1, 2], 3)).toBe(1);
  });

  test("numRescueBoats([3,2,2,1], 3) should be 3", () => {
    expect(numRescueBoats([3, 2, 2, 1], 3)).toBe(3);
  });

  test("numRescueBoats([3,5,3,4], 5) should be 4", () => {
    expect(numRescueBoats([3, 5, 3, 4], 5)).toBe(4);
  });

  test("numRescueBoats([2,2], 6) should be 1", () => {
    expect(numRescueBoats([2, 2], 6)).toBe(1);
  });

  test.skip("numRescueBoats(people, limit) should be result", () => {
    expect(numRescueBoats(people, limit)).toBe(result);
  });
});
