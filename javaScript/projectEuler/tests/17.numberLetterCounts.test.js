const {
  chart,
  letterCount,
  numberLetterCount,
} = require("../17.numberLetterCounts");

describe("chart[]", () => {
  test("chart[1][1] should be 3", () => {
    expect(chart[1][1]).toBe(3);
  });

  test("chart[19][1] should be 8", () => {
    expect(chart[19][1]).toBe(8);
  });
});

describe("letterCount()", () => {
  test("letterCount(10) should be 3", () => {
    expect(letterCount(10)).toBe(3);
  });

  test("letterCount(20) should be 6", () => {
    expect(letterCount(20)).toBe(6);
  });

  test("letterCount(30) should be 6", () => {
    expect(letterCount(30)).toBe(6);
  });

  test("letterCount(40) should be 5", () => {
    expect(letterCount(40)).toBe(5);
  });

  test("letterCount(50) should be 5", () => {
    expect(letterCount(50)).toBe(5);
  });

  test("letterCount(60) should be 5", () => {
    expect(letterCount(60)).toBe(5);
  });

  test("letterCount(70) should be 7", () => {
    expect(letterCount(70)).toBe(7);
  });

  test("letterCount(80) should be 6", () => {
    expect(letterCount(80)).toBe(6);
  });

  test("letterCount(90) should be 6", () => {
    expect(letterCount(90)).toBe(6);
  });

  test("letterCount(77) should be 12", () => {
    expect(letterCount(77)).toBe(12);
  });

  test("letterCount(189) should be 23", () => {
    expect(letterCount(189)).toBe(23);
  });

  test("letterCount(189, true) should be 20", () => {
    expect(letterCount(189, true)).toBe(20);
  });

  test("letterCount(810) should be 18", () => {
    expect(letterCount(810)).toBe(18);
  });

  test("letterCount(2278) should be 36", () => {
    expect(letterCount(2278)).toBe(36);
  });

  test("letterCount(1000) should be 11", () => {
    expect(letterCount(1000)).toBe(11);
  });

  test("letterCount(342) should be 23", () => {
    expect(letterCount(342)).toBe(23);
  });

  test("letterCount(115) should be 20", () => {
    expect(letterCount(115)).toBe(20);
  });

  test("letterCount(100) should be 10", () => {
    expect(letterCount(100)).toBe(10);
  });

  test("letterCount(200) should be 10", () => {
    expect(letterCount(200)).toBe(10);
  });

  test("letterCount(300) should be 12", () => {
    expect(letterCount(300)).toBe(12);
  });

  test("letterCount(400) should be 11", () => {
    expect(letterCount(400)).toBe(11);
  });

  test("letterCount(500) should be 10", () => {
    expect(letterCount(500)).toBe(11);
  });

  test("letterCount(101) should be 16", () => {
    expect(letterCount(101)).toBe(16);
  });
});

describe("numberLetterCount()", () => {
  test("numberLetterCount(1, 5) should be 19", () => {
    expect(numberLetterCount(1, 5)).toBe(19);
  });

  test("numberLetterCount(1, 6) should be 22", () => {
    expect(numberLetterCount(1, 6)).toBe(22);
  });
});
