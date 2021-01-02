const { generate } = require("../118.generate");

describe("generate()", () => {
  const result1 = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
  test("generate(5) should be result1", () => {
    expect(generate(5)).toStrictEqual(result1);
  });

  test.skip("generate(numRows) should be result1", () => {
    expect(generate(numRows)).toStrictEqual(result1);
  });
});
