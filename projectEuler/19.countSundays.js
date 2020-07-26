/*
You are given the following information, but you may prefer to do some research for yourself.

* 1 Jan 1900 was a Monday.

* Thirty days has September,
  April, June and November.
  All the rest have thirty-one,
  Saving February alone,
  Which has twenty-eight, rain or shine.
  And on leap years, twenty-nine.

 * A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

/*
Reflection:
The three facts taken together indicate that the first of the month
being a certain day of the week is complicated, as the number of days in February is complicated. The clearest way to solve this is to build a function able to accurately calculate which day of the week a month starts
on, with everything calculated iteritively from 1901/01/01 being a Monday.

Solving this iteritively may reveal a faster way to calculate the day of the week a date falls on, without needing to calculate all dates between it and
1900/01/01. This will be the fast answer, while the other is the brute force
solution.
*/

/*
Construction:
Using memoization, an input year consults an object literal to see if it
already contains the answer requested. This is done by checking the property
"highest" which gives the highest date stored in the object. This property
is updated whenever new dates must be calculated. Assuming it's inclusive,
the day of the search date doesn't really matter; only the month and year.
Searching a date looks up the year and month in the object, which stores the
day of the week the first day of the month started on, and the number of
Sundays since 1901/01/01.

When the searched date is higher than the highest date in the object, a
function is used to extend the data in the object by calculating firsts
of the month, forward from the highest date prior to calculation. The
last (and highest) date calculated is then recorded as such, and the
number of Sundays returned.
*/

let record = {
  190001 : [1, 0],
  highest : '190001'
}

let calculateNext = (record) => {
  let commonCal = {
    1 : ['Januray', 31],
    2 : ['February', 28],
    3 : ['March', 31],
    4 : ['April', 30],
    5 : ['May', 31],
    6 : ['June', 30],
    7 : ['July', 31],
    8 : ['August', 31],
    9 : ['September', 30],
    10 : ['October', 31],
    11 : ['November', 30],
    12 : ['December', 31]
  }
  let year = parseInt(record['highest'].slice(0,4), 10);
  let month = parseInt(record['highest'].slice(4,6), 10);
  let day = parseInt(record[record['highest']][0]);
  let count = parseInt(record[record['highest']][1]);
  let needsLeapDay = 0;
  day += commonCal[month][1];
  if (month === 2) {
    if (year % 4 === 0) {
      needsLeapDay = 1;
    }
    if (needsLeapDay) {
      if (year % 100 === 0 && year % 400 !== 0) {
        needsLeapDay = 0;
      }
    }
  }
  day += needsLeapDay;
  day %= 7;
  if (day === 0) {
    count++;
  }
  month++;
  if (month > 12) {
    year++;
    month = 1;
  }
  month = month.toString();
  if (month.length === 1) {
    month = '0' + month;
  }
  year = year.toString();
  let newValue = year + month;
  record[newValue] = [day, count];
  record['highest'] = newValue;
}

module.exports = {calculateNext};