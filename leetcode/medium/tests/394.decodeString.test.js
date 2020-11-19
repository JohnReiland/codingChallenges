const { decodeString } = require("../394.decodeString");

describe("decodeString()", () => {
  test(`decodeString("3[a]2[bc]") should be "aaabcbc"`, () => {
    expect(decodeString("3[a]2[bc]")).toBe("aaabcbc");
  });

  test(`decodeString("3[a2[c]]") should be "accaccacc"`, () => {
    expect(decodeString("3[a2[c]]")).toBe("accaccacc");
  });

  test(`decodeString("2[abc]3[cd]ef") should be "abcabccdcdcdef"`, () => {
    expect(decodeString("2[abc]3[cd]ef")).toBe("abcabccdcdcdef");
  });

  test(`decodeString("abc3[cd]xyz") should be "abccdcdcdxyz"`, () => {
    expect(decodeString("abc3[cd]xyz")).toBe("abccdcdcdxyz");
  });

  test(`decodeString("") should be ""`, () => {
    expect(decodeString("")).toBe("");
  });

  test(`decodeString("3[a20[c]]") should be "accccccccccccccccccccaccccccccccccccccccccacccccccccccccccccccc"`, () => {
    expect(decodeString("3[a20[c]]")).toBe(
      "accccccccccccccccccccaccccccccccccccccccccacccccccccccccccccccc"
    );
  });
});
