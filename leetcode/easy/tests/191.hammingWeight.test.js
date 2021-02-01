const { hammingWeight } = require("../191.hammingWeight");

describe("hammingWeight()", () => {
  test("hammingWeight(00000000000000000000000000001011) should be 3", () => {
    expect(hammingWeight(0b00000000000000000000000000001011)).toBe(3);
  });

  test("hammingWeight(00000000000000000000000010000000) should be 1", () => {
    expect(hammingWeight(0b00000000000000000000000010000000)).toBe(1);
  });

  test("hammingWeight(11111111111111111111111111111101) should be 31", () => {
    expect(hammingWeight(0b11111111111111111111111111111101)).toBe(31);
  });

  test.skip("hammingWeight(num) should be result", () => {
    expect(hammingWeight(num)).toBe(result);
  });
});
