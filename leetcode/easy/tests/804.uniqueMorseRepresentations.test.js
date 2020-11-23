const {
  uniqueMorseRepresentations,
} = require("../804.uniqueMorseRepresentations");

describe("uniqueMorseRepresentations()", () => {
  test(`uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]) should be 2`, () => {
    expect(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])).toBe(2);
  });

  test.skip(`uniqueMorseRepresentations(value) should be result`, () => {
    expect(uniqueMorseRepresentations(value)).toBe(result);
  });
});
