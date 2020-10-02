const { addBinary } = require("../67.addBinary");

describe("addBinary()", () => {
  test("addBinary('1010', '0' should be '1010'", () => {
    expect(addBinary("1010", "0")).toBe("1010");
  });

  test("addBinary('0', '1011' should be '1011'", () => {
    expect(addBinary("0", "1011")).toBe("1011");
  });

  test("addBinary('0', '0' should be '0'", () => {
    expect(addBinary("0", "0")).toBe("0");
  });

  test("addBinary('11', '1' should be '100'", () => {
    expect(addBinary("11", "1")).toBe("100");
  });

  test("addBinary('1010', '1011' should be '10101'", () => {
    expect(addBinary("1010", "1011")).toBe("10101");
  });
});
