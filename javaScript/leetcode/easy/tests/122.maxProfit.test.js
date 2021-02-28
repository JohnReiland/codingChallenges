const { maxProfit } = require("../122.maxProfit");

describe("maxProfit()", () => {
  test("maxProfit([7, 1, 5, 3, 6, 4]) should be 7", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
  });

  test("maxProfit([1, 2, 3, 4, 5]) should be 4", () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });

  test("maxProfit([7, 6, 4, 3, 1]) should be 0", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  test.skip("maxProfit(prices) should be result", () => {
    expect(maxProfit(prices)).toBe(result);
  });
});
