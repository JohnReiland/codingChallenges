const {calculateNext, countSundays} = require('../19.countSundays');

/*
describe('calculateNext()', () => {

  test('calculateNext(record) should be "1901"', () => {
    expect(calculateNext({
        190101 : [1, 0],
        highest : '190101'
    })).toBe(1901);
  })

  test('calculateNext(record) should be "1901"', () => {
    expect(calculateNext({
        190101 : [1, 0],
        highest : '190101'
    })).toBe(1);
  })


  test('calculateNext(record) should be "1901"', () => {
    expect(calculateNext({
    190101 : [1, 0],
    highest : '190101'
    })).toBe(1);
  })

})
*/


describe('countSundays()', () => {

  test('countSundays(190112) should be "2"', () => {
    expect(countSundays(190112)).toBe(2);
  })

  test('countSundays(190512) should be "9"', () => {
    expect(countSundays(190512)).toBe(9);
  })
})