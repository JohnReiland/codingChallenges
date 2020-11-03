const { isMatch } = require("../10.isMatch");

describe(`isMatch(".")`, () => {
  test(`isMatch("", ".") should be false`, () => {
    expect(isMatch("", ".")).toBe(false);
  });

  test(`isMatch("aa", ".") should be false`, () => {
    expect(isMatch("aa", ".")).toBe(false);
  });

  test(`isMatch("a", ".") should be true`, () => {
    expect(isMatch("a", ".")).toBe(true);
  });
});

describe(`isMatch("a")`, () => {
  test(`isMatch("", "a") should be false`, () => {
    expect(isMatch("", "a")).toBe(false);
  });

  test(`isMatch("b", "a") should be false`, () => {
    expect(isMatch("b", "a")).toBe(false);
  });

  test(`isMatch("a", "a") should be true`, () => {
    expect(isMatch("a", "a")).toBe(true);
  });
});

describe(`isMatch(".a")`, () => {
  test(`isMatch("a", ".a") should be false`, () => {
    expect(isMatch("a", ".a")).toBe(false);
  });

  test(`isMatch("ab", ".a") should be false`, () => {
    expect(isMatch("ab", ".a")).toBe(false);
  });

  test(`isMatch("ba", ".a") should be true`, () => {
    expect(isMatch("ba", ".a")).toBe(true);
  });
});

describe(`isMatch("..")`, () => {
  test(`isMatch("a", "..") should be false`, () => {
    expect(isMatch("a", "..")).toBe(false);
  });

  test(`isMatch("ab", "..") should be true`, () => {
    expect(isMatch("ab", "..")).toBe(true);
  });

  test(`isMatch("ba", "a.") should be false`, () => {
    expect(isMatch("ba", "a.")).toBe(false);
  });

  test(`isMatch("a", "a.") should be false`, () => {
    expect(isMatch("a", "a.")).toBe(false);
  });

  test(`isMatch("a", "a.") should be false`, () => {
    expect(isMatch("a", "a.")).toBe(false);
  });

  test(`isMatch("ab", "a.") should be true`, () => {
    expect(isMatch("ab", "a.")).toBe(true);
  });
});

describe(`isMatch("a.a")`, () => {
  test(`isMatch("string", "a.a") should be false`, () => {
    expect(isMatch("string", "a.a")).toBe(false);
  });

  test(`isMatch("string", "a.a") should be false`, () => {
    expect(isMatch("string", "a.a")).toBe(false);
  });

  test(`isMatch("aa", "a.a") should be false`, () => {
    expect(isMatch("aa", "a.a")).toBe(false);
  });

  test(`isMatch("aaa", "a.a") should be true`, () => {
    expect(isMatch("aaa", "a.a")).toBe(true);
  });
});

describe(`isMatch(".a.")`, () => {
  test(`isMatch("aaaa", ".a.") should be false`, () => {
    expect(isMatch("aaaa", ".a.")).toBe(false);
  });

  test(`isMatch("abc", ".a.") should be false`, () => {
    expect(isMatch("abc", ".a.")).toBe(false);
  });

  test(`isMatch("bac", ".a.") should be true`, () => {
    expect(isMatch("bac", ".a.")).toBe(true);
  });
});

describe(`isMatch("a*")`, () => {
  test(`isMatch("aaab", "a*") should be false`, () => {
    expect(isMatch("aaab", "a*")).toBe(false);
  });

  test(`isMatch("aaaa", "a*") should be true`, () => {
    expect(isMatch("aaaa", "a*")).toBe(true);
  });

  test(`isMatch("", "a*") should be true`, () => {
    expect(isMatch("", "a*")).toBe(true);
  });
});

describe(`isMatch(".*")`, () => {
  test(`isMatch("", ".*") should be true`, () => {
    expect(isMatch("", ".*")).toBe(true);
  });

  test(`isMatch("a", ".*") should be true`, () => {
    expect(isMatch("a", ".*")).toBe(true);
  });

  test(`isMatch("abced", ".*") should be true`, () => {
    expect(isMatch("abced", ".*")).toBe(true);
  });
});

describe(`isMatch(".*a")`, () => {
  test(`isMatch("", ".*a") should be false`, () => {
    expect(isMatch("", ".*a")).toBe(false);
  });

  test(`isMatch("ab", ".*a") should be false`, () => {
    expect(isMatch("ab", ".*a")).toBe(false);
  });

  test(`isMatch("a", ".*a") should be true`, () => {
    expect(isMatch("a", ".*a")).toBe(true);
  });

  test(`isMatch("ba", ".*a") should be true`, () => {
    expect(isMatch("ba", ".*a")).toBe(true);
  });
});

describe(`isMatch(".*.")`, () => {
  test(`isMatch("", ".*.") should be false`, () => {
    expect(isMatch("", ".*.")).toBe(false);
  });

  test(`isMatch("a", ".*.") should be true`, () => {
    expect(isMatch("a", ".*.")).toBe(true);
  });

  test(`isMatch("ab", ".*.") should be true`, () => {
    expect(isMatch("ab", ".*.")).toBe(true);
  });
});

describe(`isMatch(".*a.*")`, () => {
  test(`isMatch("", ".*a.*") should be false`, () => {
    expect(isMatch("", ".*a.*")).toBe(false);
  });

  test(`isMatch("bcdefgh", ".*a.*") should be false`, () => {
    expect(isMatch("bcdefgh", ".*a.*")).toBe(false);
  });

  test(`isMatch("a", ".*a.*") should be true`, () => {
    expect(isMatch("a", ".*a.*")).toBe(true);
  });

  test(`isMatch("abcdefgh", ".*a.*") should be true`, () => {
    expect(isMatch("abcdefgh", ".*a.*")).toBe(true);
  });

  test(`isMatch("hgfedcba", ".*a.*") should be true`, () => {
    expect(isMatch("hgfedcba", ".*a.*")).toBe(true);
  });

  test(`isMatch("hgfedcbabcdefgh", ".*a.*") should be true`, () => {
    expect(isMatch("hgfedcbabcdefgh", ".*a.*")).toBe(true);
  });
});

describe(`isMatch(".*..*")`, () => {
  test(`isMatch("", ".*..*") should be false`, () => {
    expect(isMatch("", ".*..*")).toBe(false);
  });

  test(`isMatch("a", ".*..*") should be true`, () => {
    expect(isMatch("a", ".*..*")).toBe(true);
  });

  test(`isMatch("bc", ".*..*") should be true`, () => {
    expect(isMatch("bc", ".*..*")).toBe(true);
  });
});

describe(`isMatch("a*.b.*")`, () => {
  test(`isMatch("b", "a*.b.*") should be false`, () => {
    expect(isMatch("b", "a*.b.*")).toBe(false);
  });

  test(`isMatch("ab", "a*.b.*") should be true`, () => {
    expect(isMatch("ab", "a*.b.*")).toBe(true);
  });

  test(`isMatch("aab", "a*.b.*") should be true`, () => {
    expect(isMatch("aab", "a*.b.*")).toBe(true);
  });

  test(`isMatch("bb", "a*.b.*") should be true`, () => {
    expect(isMatch("bb", "a*.b.*")).toBe(true);
  });
});

describe(`isMatch("ab*a.*ba*ca.*b")`, () => {
  test(`isMatch("aacab", "ab*a.*ba*ca.*b") should be false`, () => {
    expect(isMatch("aacab", "ab*a.*ba*ca.*b")).toBe(false);
  });

  test(`isMatch("bbabcab", "ab*a.*ba*ca.*b") should be false`, () => {
    expect(isMatch("bbabcab", "ab*a.*ba*ca.*b")).toBe(false);
  });

  test(`isMatch("aabaca", "ab*a.*ba*ca.*b") should be false`, () => {
    expect(isMatch("aabaca", "ab*a.*ba*ca.*b")).toBe(false);
  });

  test(`isMatch("aacadb", "ab*a.*ba*ca.*b") should be false`, () => {
    expect(isMatch("aacadb", "ab*a.*ba*ca.*b")).toBe(false);
  });

  test(`isMatch("aabdcab", "ab*a.*ba*ca.*b") should be false`, () => {
    expect(isMatch("aabdcab", "ab*a.*ba*ca.*b")).toBe(false);
  });

  test(`isMatch("abbbcab", "ab*a.*ba*ca.*b") should be false`, () => {
    expect(isMatch("abbbcab", "ab*a.*ba*ca.*b")).toBe(false);
  });

  test(`isMatch("aabacab", "ab*a.*ba*ca.*b") should be true`, () => {
    expect(isMatch("aabacab", "ab*a.*ba*ca.*b")).toBe(true);
  });

  test(`isMatch("abaadbaacab", "ab*a.*ba*ca.*b") should be true`, () => {
    expect(isMatch("abaadbaacab", "ab*a.*ba*ca.*b")).toBe(true);
  });
});

describe(`isMatch("a*.*b.c.*b")`, () => {
  test(`isMatch("bicb", "a*.*b.c.*b") should be true`, () => {
    expect(isMatch("bicb", "a*.*b.c.*b")).toBe(true);
  });
});

describe(`isMatch("a*..b.*")`, () => {
  test(`isMatch("zbsoijfoie", "a*..b.*") should be false`, () => {
    expect(isMatch("zbsoijfoie", "a*..b.*")).toBe(false);
  });
});

describe(`isMatch("c*..b*a*a.*a..*c")`, () => {
  test(`isMatch("baabbbaccbccacacc", "c*..b*a*a.*a..*c") should be true`, () => {
    expect(isMatch("baabbbaccbccacacc", "c*..b*a*a.*a..*c")).toBe(true);
  });
});

describe(`isMatch(".*c*a*b.*a*ba*bb*")`, () => {
  test(`isMatch("aabccbcbacabaab", ".*c*a*b.*a*ba*bb*") should be true`, () => {
    expect(isMatch("aabccbcbacabaab", ".*c*a*b.*a*ba*bb*")).toBe(true);
  });
});

describe(`isMatch("a*.*b*.*a*aa*a*")`, () => {
  test(`isMatch("acaabbaccbbacaabbbb", "a*.*b*.*a*aa*a*") should be false`, () => {
    expect(isMatch("acaabbaccbbacaabbbb", "a*.*b*.*a*aa*a*")).toBe(false);
  });
});

describe(`isMatch("ac*.a*ac*.*ab*b*ac")`, () => {
  test(`isMatch("acbbcbcbcbaaacaac", "ac*.a*ac*.*ab*b*ac") should be false`, () => {
    expect(isMatch("acbbcbcbcbaaacaac", "ac*.a*ac*.*ab*b*ac")).toBe(false);
  });
});

describe(`isMatch(".*..a*")`, () => {
  test(`isMatch("a", ".*..a*") should be false`, () => {
    expect(isMatch("a", ".*..a*")).toBe(false);
  });
});

describe(`isMatch("a*.*ba.*c*..a*.a*.")`, () => {
  test(`isMatch("abbaaaabaabbcba", "a*.*ba.*c*..a*.a*.") should be true`, () => {
    expect(isMatch("abbaaaabaabbcba", "a*.*ba.*c*..a*.a*.")).toBe(true);
  });
});

describe(`isMatch("b*c*c*.*.*bba*b*")`, () => {
  test(`isMatch("baaabaacaacaacbca", "b*c*c*.*.*bba*b*") should be false`, () => {
    expect(isMatch("baaabaacaacaacbca", "b*c*c*.*.*bba*b*")).toBe(false);
  });
});

describe(`isMatch("ab*.*c*b*ac*c*c*.")`, () => {
  test(`isMatch("acbccccacccaabcc", "ab*.*c*b*ac*c*c*.") should be false`, () => {
    expect(isMatch("acbccccacccaabcc", "ab*.*c*b*ac*c*c*.")).toBe(false);
  });
});
