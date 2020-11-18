const { deckRevealedIncreasing } = require("../950.deackRevealedIncreasing");

describe("deckRevealedIncreasing()", () => {
  test("deckRevealedIncreasing([0,1,2,3,4,5])", () => {
    expect(deckRevealedIncreasing([0, 1, 2, 3, 4, 5, 6])).toStrictEqual([
      0,
      5,
      1,
      4,
      2,
      6,
      3,
    ]);
  });
});
