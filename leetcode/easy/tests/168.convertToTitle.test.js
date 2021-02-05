const { convertToTitle } = require("../168.convertToTitle");

describe("convertToTitle()", () => {
  test(`convertToTitle(1) should be "A"`, () => {
    expect(convertToTitle(1)).toBe("A");
  });

  test(`convertToTitle(28) should be "AB"`, () => {
    expect(convertToTitle(28)).toBe("AB");
  });

  test(`convertToTitle(701) should be "ZY"`, () => {
    expect(convertToTitle(701)).toBe("ZY");
  });

  test.skip(`convertToTitle(num) should be result`, () => {
    expect(convertToTitle(num)).toBe(result);
  });
});
