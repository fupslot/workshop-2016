const lib = require('../');
const daysInMonth = lib.daysInMonth;
const weekDayOf1st = lib.weekDayOf1st;
const paddedDaysArrayOfMonth = lib.paddedDaysArrayOfMonth;

describe('days-array', function() {
  it('should get an amount days in the given month', function() {
    expect(daysInMonth(2016, 0)).toEqual(31); // Jan 1 2016
    expect(daysInMonth(2016, 1)).toEqual(29); // Feb 1 2016
    expect(daysInMonth(2016, 2)).toEqual(31); // Mar 1 2016
    expect(daysInMonth(2016, 3)).toEqual(30); // Apr 1 2016
    expect(daysInMonth(2016, 4)).toEqual(31); // May 1 2016
    expect(daysInMonth(2016, 5)).toEqual(30); // Jun 1 2016
    expect(daysInMonth(2016, 6)).toEqual(31); // Jul 1 2016
    expect(daysInMonth(2016, 7)).toEqual(31); // Aug 1 2016
    expect(daysInMonth(2016, 8)).toEqual(30); // Sep 1 2016
    expect(daysInMonth(2016, 9)).toEqual(31); // Oct 1 2016
    expect(daysInMonth(2016, 10)).toEqual(30); // Nov 1 2016
    expect(daysInMonth(2016, 11)).toEqual(31); // Dec 1 2016
  });

  it('should retrun a day of a week on the 1s in specified month', function() {
    expect(weekDayOf1st(2016, 0)).toEqual(5); // Jan 1 2016
    expect(weekDayOf1st(2016, 1)).toEqual(1); // Feb 1 2016
    expect(weekDayOf1st(2016, 2)).toEqual(2); // Mar 1 2016
    expect(weekDayOf1st(2016, 3)).toEqual(5); // Apr 1 2016
    expect(weekDayOf1st(2016, 4)).toEqual(0); // May 1 2016
    expect(weekDayOf1st(2016, 5)).toEqual(3); // Jun 1 2016
    expect(weekDayOf1st(2016, 6)).toEqual(5); // Jul 1 2016
    expect(weekDayOf1st(2016, 7)).toEqual(1); // Aug 1 2016
    expect(weekDayOf1st(2016, 8)).toEqual(4); // Sep 1 2016
    expect(weekDayOf1st(2016, 9)).toEqual(6); // Oct 1 2016
    expect(weekDayOf1st(2016, 10)).toEqual(2); // Nov 1 2016
    expect(weekDayOf1st(2016, 11)).toEqual(4); // Dec 1 2016
  });

  it('should return padded day array of specified month', function() {
    expect(paddedDaysArrayOfMonth(2016, 0)).toEqual(42); // Jan 1 2016
    expect(paddedDaysArrayOfMonth(2016, 1)).toEqual(35); // Feb 1 2016
    expect(paddedDaysArrayOfMonth(2016, 2)).toEqual(35); // Mar 1 2016
    expect(paddedDaysArrayOfMonth(2016, 3)).toEqual(35); // Apr 1 2016
    expect(paddedDaysArrayOfMonth(2016, 4)).toEqual(35); // May 1 2016
    expect(paddedDaysArrayOfMonth(2016, 5)).toEqual(35); // Jun 1 2016
    expect(paddedDaysArrayOfMonth(2016, 6)).toEqual(42); // Jul 1 2016
    expect(paddedDaysArrayOfMonth(2016, 7)).toEqual(35); // Aug 1 2016
    expect(paddedDaysArrayOfMonth(2016, 8)).toEqual(35); // Sep 1 2016
    expect(paddedDaysArrayOfMonth(2016, 9)).toEqual(42); // Oct 1 2016
    expect(paddedDaysArrayOfMonth(2016, 10)).toEqual(35); // Nov 1 2016
    expect(paddedDaysArrayOfMonth(2016, 11)).toEqual(35); // Dec 1 2016
  });
});
