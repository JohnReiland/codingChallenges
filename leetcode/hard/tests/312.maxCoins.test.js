const { maxCoins } = require("../312.maxCoins");

describe("maxCoins()", () => {
  test("maxCoins([3,1,5,8]) should be 167", () => {
    expect(maxCoins([3, 1, 5, 8])).toBe(167);
  });

  test("maxCoins([8,5,4,3,2,6,1,4]) should be 724", () => {
    expect(maxCoins([8, 5, 4, 3, 2, 6, 1, 4])).toBe(724);
  });

  test.skip("maxCoins(nums) should be result", () => {
    expect(maxCoins(nums)).toBe(result);
  });
});
