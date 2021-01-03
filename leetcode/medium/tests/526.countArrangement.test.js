const { countArrangement } = require("../526.countArrangement");

describe("countArrangement()", () => {
  test("countArrangement(1) should be 1", () => {
    expect(countArrangement(1)).toBe(1);
  });

  test("countArrangement(2) should be 2", () => {
    expect(countArrangement(2)).toBe(2);
  });

  test("countArrangement(3) should be 3", () => {
    expect(countArrangement(3)).toBe(3);
  });

  test("countArrangement(4) should be 8", () => {
    expect(countArrangement(4)).toBe(8);
  });

  test("countArrangement(5) should be 10", () => {
    expect(countArrangement(5)).toBe(10);
  });

  test("countArrangement(6) should be 36", () => {
    expect(countArrangement(6)).toBe(36);
  });

  test("countArrangement(7) should be 41", () => {
    expect(countArrangement(7)).toBe(41);
  });

  test.skip("countArrangement(num) should be result", () => {
    expect(countArrangement(num)).toBe(result);
  });
});
