const {
  transform,
  uniqueMorseRepresentations,
} = require("../804.uniqueMorseRepresentations");

describe("transform()", () => {
  test(`transform("gin") should be "--...-."`, () => {
    expect(transform("gin")).toBe("--...-.");
  });

  test(`transform("zen") should be "--...-."`, () => {
    expect(transform("zen")).toBe("--...-.");
  });

  test(`transform("gig") should be "--...--."`, () => {
    expect(transform("gig")).toBe("--...--.");
  });

  test(`transform("msg") should be "--...--."`, () => {
    expect(transform("msg")).toBe("--...--.");
  });
});

describe("uniqueMorseRepresentations()", () => {
  test(`uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]) should be 2`, () => {
    expect(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])).toBe(2);
  });

  test(`uniqueMorseRepresentations([]) should be 0`, () => {
    expect(uniqueMorseRepresentations([])).toBe(0);
  });
});
