const { canPlaceFlowers } = require("../605.canPlaceFlowers");

describe("canPlaceFlowers()", () => {
  test("canPlaceFlowers([1,0,0,0,1], 1) should be true", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
  });

  test("canPlaceFlowers([1,0,0,0,1], 2) should be false", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
  });

  test.skip("canPlaceFlowers(flowerbed, num) should be result", () => {
    expect(canPlaceFlowers(flowerbed, num)).toBe(result);
  });
});
