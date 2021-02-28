const { climbStairs } = require("../70.climbStairs");

describe("climbStairs", () => {
  test("climbstairs(2) should be 2", () => {
    expect(climbStairs(2)).toBe(2);
  });

  test("climbstairs(3) should be 3", () => {
    expect(climbStairs(3)).toBe(3);
  });

  test("climbstairs(4) should be 5", () => {
    expect(climbStairs(4)).toBe(5);
  });
});
