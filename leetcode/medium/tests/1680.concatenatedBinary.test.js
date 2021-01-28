const { concatenatedBinary } = require("../1680.concatenatedBinary");

describe("concatenatedBinary()", () => {
  test("concatenatedBinary(1) should be 1", () => {
    expect(concatenatedBinary(1)).toBe(1);
  });

  test("concatenatedBinary(3) should be 27", () => {
    expect(concatenatedBinary(3)).toBe(27);
  });

  test("concatenatedBinary(12) should be 505379714", () => {
    expect(concatenatedBinary(12)).toBe(505379714);
  });

  test.skip("concatenatedBinary(num) should be result", () => {
    expect(concatenatedBinary(num)).toBe(result);
  });
});
