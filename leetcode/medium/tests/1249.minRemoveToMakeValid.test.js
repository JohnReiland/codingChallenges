const { minRemoveToMakeValid } = require("../1249.minRemoveToMakeValid");

describe("minRemoveToMakeValid()", () => {
  test(`minRemoveToMakeValid("lee(t(c)o)de)") should bre "lee(t(c)o)de"`, () => {
    expect(minRemoveToMakeValid("lee(t(c)o)de)")).toBe("lee(t(c)o)de");
  });

  test(`minRemoveToMakeValid("a)b(c)d") should bre "ab(c)d"`, () => {
    expect(minRemoveToMakeValid("a)b(c)d")).toBe("ab(c)d");
  });

  test(`minRemoveToMakeValid("))((") should bre ""`, () => {
    expect(minRemoveToMakeValid("))((")).toBe("");
  });

  test(`minRemoveToMakeValid("(a(b(c)d)") should bre "a(b(c)d)"`, () => {
    expect(minRemoveToMakeValid("(a(b(c)d)")).toBe("a(b(c)d)");
  });

  test.skip(`minRemoveToMakeValid("string") should bre "result"`, () => {
    expect(minRemoveToMakeValid("string")).toBe("result");
  });
});
