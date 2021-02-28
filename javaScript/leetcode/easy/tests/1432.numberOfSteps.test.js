const { numberOfSteps } = require("../1432.numberOfSteps");

describe("numberOfSteps()", () => {
  test("numberOfSteps(14) should be 6", () => {
    expect(numberOfSteps(14)).toBe(6);
  });

  test("numberOfSteps(8) should be 4", () => {
    expect(numberOfSteps(8)).toBe(4);
  });

  test("numberOfSteps(123) should be 12", () => {
    expect(numberOfSteps(123)).toBe(12);
  });

  test.skip("numberOfSteps(target) should be result", () => {
    expect(numberOfSteps(target)).toBe(result);
  });
});
