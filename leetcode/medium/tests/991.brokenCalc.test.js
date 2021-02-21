const { brokenCalc } = require("../991.brokenCalc");

describe("brokenCalc()", () => {
  test("brokenCalc(2, 3) should be 2", () => {
    expect(brokenCalc(2, 3)).toBe(2);
  });

  test("brokenCalc(5, 8) should be result", () => {
    expect(brokenCalc(5, 8)).toBe(result);
  });

  test("brokenCalc(3, 10) should be result", () => {
    expect(brokenCalc(3, 10)).toBe(result);
  });

  test("brokenCalc(1024, 1) should be 1023", () => {
    expect(brokenCalc(1024, 1)).toBe(1023);
  });

  test.skip("brokenCalc(start, end) should be result", () => {
    expect(brokenCalc(start, end)).toBe(result);
  });
});
