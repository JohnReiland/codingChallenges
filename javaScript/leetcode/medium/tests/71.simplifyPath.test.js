const { simplifyPath } = require("../71.simplifyPath");

describe("simplifyPath()", () => {
  test(`simplifyPath("/home/") should be "/home"`, () => {
    expect(simplifyPath("/home/")).toBe("/home");
  });

  test(`simplifyPath("/../") should be "/"`, () => {
    expect(simplifyPath("/../")).toBe("/");
  });

  test(`simplifyPath("/home//foo/") should be "/home/foo"`, () => {
    expect(simplifyPath("/home//foo/")).toBe("/home/foo");
  });

  test(`simplifyPath("/a/./b/../../c/") should be "/c"`, () => {
    expect(simplifyPath("/a/./b/../../c/")).toBe("/c");
  });

  test.skip(`simplifyPath(pathString) should be "result"`, () => {
    expect(simplifyPath(pathString)).toBe("result");
  });
});
