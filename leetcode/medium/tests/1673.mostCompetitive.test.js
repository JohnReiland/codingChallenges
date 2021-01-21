const { mostCompetitive } = require("../1673.mostCompetitive");

describe("mostCompetitive()", () => {
  test("mostCompetitive([3,5,2,6], 2) should be [2,6]", () => {
    expect(mostCompetitive([3, 5, 2, 6], 2)).toStrictEqual([2, 6]);
  });

  test("mostCompetitive([2,4,3,3,5,4,9,6], 4) should be [2,3,3,4]", () => {
    expect(mostCompetitive([2, 4, 3, 3, 5, 4, 9, 6], 4)).toStrictEqual([
      2,
      3,
      3,
      4,
    ]);
  });

  test.skip("mostCompetitive(nums, k) should be result", () => {
    expect(mostCompetitive(nums, k)).toStrictEqual(result);
  });
});
