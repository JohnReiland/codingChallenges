const { addBinary, addAndCarry } = require("../67.addBinary");

describe("addBinary()", () => {
  test("addBinary('1010', '0') should be '1010'", () => {
    expect(addBinary("1010", "0")).toBe("1010");
  });

  test("addBinary('0', '1011') should be '1011'", () => {
    expect(addBinary("0", "1011")).toBe("1011");
  });

  test("addBinary('0', '0') should be '0'", () => {
    expect(addBinary("0", "0")).toBe("0");
  });

  test("addBinary('11', '1') should be '100'", () => {
    expect(addBinary("11", "1")).toBe("100");
  });

  test("addBinary('101', '101') should be '1010'", () => {
    expect(addBinary("101", "101")).toBe("1010");
  });

  test("addBinary('111', '111') should be '1110'", () => {
    expect(addBinary("111", "111")).toBe("1110");
  });

  test("addBinary('1010', '1011') should be '10101'", () => {
    expect(addBinary("1010", "1011")).toBe("10101");
  });

  test("addBinary('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101', '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011') should be '110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000'", () => {
    expect(
      addBinary(
        "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
        "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
      )
    ).toBe(
      "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
    );
  });
});
