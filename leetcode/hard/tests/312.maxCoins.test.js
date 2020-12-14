const { maxCoins } = require("../312.maxCoins");

describe("maxCoins()", () => {
  test("maxCoins([3, 1, 5, 8]) should be 167", () => {
    expect(maxCoins([3, 1, 5, 8])).toBe(167);
  });

  test("maxCoins([8, 5, 3, 2, 6, 1, 4]) should be 622", () => {
    expect(maxCoins([8, 5, 3, 2, 6, 1, 4])).toBe(622);
  });

  test("maxCoins([5, 3, 4, 2]) should be 115", () => {
    expect(maxCoins([5, 3, 4, 2])).toBe(115);
  });

  test("maxCoins([5, 4, 3, 2]) should be 105", () => {
    expect(maxCoins([5, 4, 3, 2])).toBe(105);
  });

  test("maxCoins([7, 6, 5, 4, 3, 4, 2, 7, 9]) should be 1424", () => {
    expect(maxCoins([7, 6, 5, 4, 3, 4, 2, 7, 9])).toBe(1424);
  });

  test.skip("maxCoins(nums) should be result", () => {
    expect(maxCoins(nums)).toBe(result);
  });
});
