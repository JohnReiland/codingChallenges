const {
  sortArrayDesc,
  convertArrayToAbs,
  minAbsSum,
  maxBinary,
  binToInt,
  rangeArray,
  intToBin,
  binArray,
  generateS,
  bruteForce,
} = require("../Delta.2011");

describe("convertArrayToAbs()", () => {
  test("convertArrayToAbs([1, 5, 2, -2]) should be [1, 5, 2, 2]", () => {
    expect(convertArrayToAbs([1, 5, 2, -2])).toStrictEqual([1, 5, 2, 2]);
  });
});

describe("sortArrayDesc()", () => {
  test("sortArrayDesc([1, 5, 2, 2]) should be [5, 2, 2, 1]", () => {
    expect(sortArrayDesc([1, 5, 2, 2])).toStrictEqual([5, 2, 2, 1]);
  });
});

describe("minAbsSum()", () => {
  test("minAbsSum([1, 5, 2, -2]) should be 0", () => {
    expect(minAbsSum([1, 5, 2, -2])).toBe(0);
  });

  test("minAbsSum([3, 3, 1, 5]) should be 0", () => {
    expect(minAbsSum([3, 3, 1, 5])).toBe(0);
  });
});

describe("maxBinary()", () => {
  test('maxBinary(4) should be "1111"', () => {
    expect(maxBinary(4)).toBe("1111");
  });
});

describe("binToInt()", () => {
  test('binToInt("1111") should be 15', () => {
    expect(binToInt("1111")).toBe(15);
  });
});

describe("rangeArray()", () => {
  test("rangeArray(5) should be [1, 2, 3, 4, 5]", () => {
    expect(rangeArray(5)).toStrictEqual([1, 2, 3, 4, 5]);
  });
});

describe("intToBin()", () => {
  test('intToBin(5) should be "101"', () => {
    expect(intToBin(5)).toBe("101");
  });
});

describe("binArray()", () => {
  test('binArray([1, 2, 3]) should be ["1", "10", "11"]', () => {
    expect(binArray([1, 2, 3])).toStrictEqual(["1", "10", "11"]);
  });
});

describe("generateS()", () => {
  test("generateS([1, 2]) should be [[1, 1], [1, -1], [-1, 1], [-1, -1]]", () => {
    expect(generateS([1, 2])).toStrictEqual([
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ]);
  });
});

describe("bruteForce()", () => {
  test("bruteForce([1, 5, 2, -2]) should be 0", () => {
    expect(bruteForce([1, 5, 2, -2])).toBe(0);
  });

  test("bruteForce([4, 2, 5, 6, -9, -8, 5, -4, 1, 25, 5, -7, 4]) should be 1", () => {
    expect(bruteForce([4, 2, 5, 6, -9, -8, 5, -4, 1, 25, 5, -7, 4])).toBe(1);
  });

  test("bruteForce([6, 8, 45, 7, 8, 64, 645, 56, 68, 89, 45]) should be 249", () => {
    expect(bruteForce([6, 8, 45, 7, 8, 64, 645, 56, 68, 89, 45])).toBe(249);
  });
});

/*
describe("minAbsSum() vs. bruteForce()", () => {
  test("minAbsSum([3, 3, 3, 4, 5]) should equal bruteForce([3, 3, 3, 4, 5])", () => {
    expect(minAbsSum([3, 3, 3, 4, 5])).toBe(bruteForce([3, 3, 3, 4, 5]));
  });

  test("minAbsSum([8, 8, 8, 8, 8, 8, 14, 16, 18]) should equal bruteForce([8, 8, 8, 8, 8, 8, 14, 16, 18])", () => {
    expect(minAbsSum([8, 8, 8, 8, 8, 8, 14, 16, 18])).toBe(
      bruteForce([8, 8, 8, 8, 8, 8, 14, 16, 18])
    );
  });

  test("minAbsSum([21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 43, 47, 53, 59, 71]) should equal bruteForce([21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 43, 47, 53, 59, 71])", () => {
    expect(
      minAbsSum([
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        43,
        47,
        53,
        59,
        71,
      ])
    ).toBe(
      bruteForce([
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        21,
        43,
        47,
        53,
        59,
        71,
      ])
    );
  });
});

*/
