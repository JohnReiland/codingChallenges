const { brokenCalc } = require("../991.brokenCalc");

describe("brokenCalc()", () => {
  test("brokenCalc(2, 3) should be 2", () => {
    expect(brokenCalc(2, 3)).toBe(2);
  });

  test("brokenCalc(5, 8) should be 2", () => {
    expect(brokenCalc(5, 8)).toBe(2);
  });

  test("brokenCalc(3, 10) should be 3", () => {
    expect(brokenCalc(3, 10)).toBe(3);
  });

  test("brokenCalc(1024, 1) should be 1023", () => {
    expect(brokenCalc(1024, 1)).toBe(1023);
  });

  test.skip("brokenCalc(start, end) should be result", () => {
    expect(brokenCalc(start, end)).toBe(result);
  });
});
