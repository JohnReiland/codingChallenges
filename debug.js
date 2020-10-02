var reverse = (int) => {
  let result = 0;
  let input = int;
  let value;
  while (input !== 0) {
    value = input % 10;
    result = result * 10 + value;
    input = (input - value) / 10;
  }
  if (result > 2147483647 || result < -2147483648) {
    result = 0;
  }
  return result;
};

var test = true;
