const { numberOfArithmeticSlices } = require("../413.numberOfArithmeticSlices");

describe("numberOfArithmeticSlices()", () => {
  test("numberOfArithmeticSlices([1, 2, 3, 4]) should be 3", () => {
    expect(numberOfArithmeticSlices([1, 2, 3, 4])).toBe(3);
  });

  test("numberOfArithmeticSlices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should be 36", () => {
    expect(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(36);
  });

  test("numberOfArithmeticSlices([1, 2, 3, 4, 6, 8, 10, 20, 30, 40]) should be 9", () => {
    expect(numberOfArithmeticSlices([1, 2, 3, 4, 6, 8, 10, 20, 30, 40])).toBe(
      9
    );
  });

  test.skip("numberOfArithmeticSlices(array) should be result", () => {
    expect(numberOfArithmeticSlices(array)).toBe(result);
  });
});
