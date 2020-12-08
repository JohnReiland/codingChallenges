const { numPairsDivisibleBy60 } = require("../1010.numPairsDivisibleBy60");

describe("numPairsDivisibleBy60()", () => {
  test("numPairsDivisibleBy60([30,20,150,100,40]) should be 3", () => {
    expect(numPairsDivisibleBy60([30, 20, 150, 100, 40])).toBe(3);
  });

  test("numPairsDivisibleBy60([60,60,60]) should be 3", () => {
    expect(numPairsDivisibleBy60([60, 60, 60])).toBe(3);
  });

  test.skip("numPairsDivisibleBy60(time) should be result", () => {
    expect(numPairsDivisibleBy60(time)).toBe(result);
  });
});
