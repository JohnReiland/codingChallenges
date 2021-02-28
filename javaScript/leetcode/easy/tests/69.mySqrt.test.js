const { mySqrt } = require("../69.mySqrt");

describe("mySqrt", () => {
  test("mySqrt(4) should be 2", () => {
    expect(mySqrt(4)).toBe(2);
  });

  test("mySqrt(8) should be 2", () => {
    expect(mySqrt(8)).toBe(2);
  });

  test("mySqrt(6400) should be 80", () => {
    expect(mySqrt(6400)).toBe(80);
  });

  test("mySqrt(6500) should be 80", () => {
    expect(mySqrt(6500)).toBe(80);
  });

  test("mySqrt(0) should be 0", () => {
    expect(mySqrt(0)).toBe(0);
  });
});
