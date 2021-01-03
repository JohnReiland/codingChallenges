const { isPalindrome } = require("../125.isPalindrome");

describe("isPalindrome()", () => {
  test(`isPalindrome("A man, a plan, a canal: Panama") should be true`, () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  test(`isPalindrome("race a car") should be false`, () => {
    expect(isPalindrome("race a car")).toBe(false);
  });

  test(`isPalindrome(" ") should be true`, () => {
    expect(isPalindrome(" ")).toBe(true);
  });

  test(`isPalindrome("  ") should be true`, () => {
    expect(isPalindrome("  ")).toBe(true);
  });

  test(`isPalindrome(".,") should be true`, () => {
    expect(isPalindrome(".,")).toBe(true);
  });

  test('isPalindrome(`"Sue," Tom smiles, "Selim smote us."`) should be true', () => {
    expect(isPalindrome(`"Sue," Tom smiles, "Selim smote us."`)).toBe(true);
  });

  test.skip(`isPalindrome("str") should be result`, () => {
    expect(isPalindrome("str")).toBe(result);
  });
});
