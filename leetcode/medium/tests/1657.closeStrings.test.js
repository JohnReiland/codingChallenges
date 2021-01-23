const { closeStrings } = require("../1657.closeStrings");

describe("closeStrings()", () => {
  test(`closeStrings("abc", "bca") should be true`, () => {
    expect(closeStrings("abc", "bca")).toBe(true);
  });

  test(`closeStrings("a", "aa") should be false`, () => {
    expect(closeStrings("a", "aa")).toBe(false);
  });

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> eeadee7805bbf91b4440d2c2c18e9763ffce2d3d
  test(`closeStrings("cabbba", "abbccc") should be true`, () => {
    expect(closeStrings("cabbba", "abbccc")).toBe(true);
  });

  test(`closeStrings("cabbba", "aabbss") should be false`, () => {
    expect(closeStrings("cabbba", "aabbss")).toBe(false);
<<<<<<< HEAD
=======
=======
  test(`closeStrings("cabbba", "abbccc") should be false`, () => {
    expect(closeStrings("cabbba", "abbccc")).toBe(false);
  });

  test(`closeStrings("cabbba", "aabbss") should be result`, () => {
    expect(closeStrings("cabbba", "aabbss")).toBe(result);
>>>>>>> ee00582a8badad2405914b3dbb52519434411173
>>>>>>> eeadee7805bbf91b4440d2c2c18e9763ffce2d3d
  });

  test.skip(`closeStrings("word1", "word2") should be result`, () => {
    expect(closeStrings("word1", "word2")).toBe(result);
  });
});
