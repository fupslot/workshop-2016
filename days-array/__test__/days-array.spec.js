const lib = require('../');

describe('days-array', function() {
  it('should get an amount days in the given month', function() {
    expect(lib.daysInMonth(2016, 0)).toEqual(31); // Jan 1 2016
    expect(lib.daysInMonth(2016, 1)).toEqual(29); // Feb 1 2016
    expect(lib.daysInMonth(2016, 2)).toEqual(31); // Mar 1 2016
    expect(lib.daysInMonth(2016, 3)).toEqual(30); // Apr 1 2016
    expect(lib.daysInMonth(2016, 4)).toEqual(31); // May 1 2016
    expect(lib.daysInMonth(2016, 5)).toEqual(30); // Jun 1 2016
    expect(lib.daysInMonth(2016, 6)).toEqual(31); // Jul 1 2016
    expect(lib.daysInMonth(2016, 7)).toEqual(31); // Aug 1 2016
    expect(lib.daysInMonth(2016, 8)).toEqual(30); // Sep 1 2016
    expect(lib.daysInMonth(2016, 9)).toEqual(31); // Oct 1 2016
    expect(lib.daysInMonth(2016, 10)).toEqual(30); // Nov 1 2016
    expect(lib.daysInMonth(2016, 11)).toEqual(31); // Dec 1 2016
  });

  it('should return a size of day table', function() {
    expect(lib.weekDayOf1st(2016, 0)).toEqual(5); // Jan 1 2016
    expect(lib.weekDayOf1st(2016, 1)).toEqual(1); // Feb 1 2016
    expect(lib.weekDayOf1st(2016, 2)).toEqual(2); // Mar 1 2016
    expect(lib.weekDayOf1st(2016, 3)).toEqual(5); // Apr 1 2016
    expect(lib.weekDayOf1st(2016, 4)).toEqual(0); // May 1 2016
    expect(lib.weekDayOf1st(2016, 5)).toEqual(3); // Jun 1 2016
    expect(lib.weekDayOf1st(2016, 6)).toEqual(5); // Jul 1 2016
    expect(lib.weekDayOf1st(2016, 7)).toEqual(1); // Aug 1 2016
    expect(lib.weekDayOf1st(2016, 8)).toEqual(4); // Sep 1 2016
    expect(lib.weekDayOf1st(2016, 9)).toEqual(6); // Oct 1 2016
    expect(lib.weekDayOf1st(2016, 10)).toEqual(2); // Nov 1 2016
    expect(lib.weekDayOf1st(2016, 11)).toEqual(4); // Dec 1 2016
  });

  it('should return padded day array of specified month', function() {
    expect(lib.dayTableSize(2016, 0)).toEqual(42); // Jan 1 2016
    expect(lib.dayTableSize(2016, 1)).toEqual(35); // Feb 1 2016
    expect(lib.dayTableSize(2016, 2)).toEqual(35); // Mar 1 2016
    expect(lib.dayTableSize(2016, 3)).toEqual(35); // Apr 1 2016
    expect(lib.dayTableSize(2016, 4)).toEqual(35); // May 1 2016
    expect(lib.dayTableSize(2016, 5)).toEqual(35); // Jun 1 2016
    expect(lib.dayTableSize(2016, 6)).toEqual(42); // Jul 1 2016
    expect(lib.dayTableSize(2016, 7)).toEqual(35); // Aug 1 2016
    expect(lib.dayTableSize(2016, 8)).toEqual(35); // Sep 1 2016
    expect(lib.dayTableSize(2016, 9)).toEqual(42); // Oct 1 2016
    expect(lib.dayTableSize(2016, 10)).toEqual(35); // Nov 1 2016
    expect(lib.dayTableSize(2016, 11)).toEqual(35); // Dec 1 2016
  });

  it('should return left padding of day table', function() {
    expect(lib.dayTableLeftPadSize(2016, 0)).toEqual(5); // Jan 1 2016
    expect(lib.dayTableLeftPadSize(2016, 1)).toEqual(1); // Feb 1 2016
    expect(lib.dayTableLeftPadSize(2016, 2)).toEqual(2); // Mar 1 2016
    expect(lib.dayTableLeftPadSize(2016, 3)).toEqual(5); // Apr 1 2016
    expect(lib.dayTableLeftPadSize(2016, 4)).toEqual(0); // May 1 2016
    expect(lib.dayTableLeftPadSize(2016, 5)).toEqual(3); // Jun 1 2016
    expect(lib.dayTableLeftPadSize(2016, 6)).toEqual(5); // Jul 1 2016
    expect(lib.dayTableLeftPadSize(2016, 7)).toEqual(1); // Aug 1 2016
    expect(lib.dayTableLeftPadSize(2016, 8)).toEqual(4); // Sep 1 2016
    expect(lib.dayTableLeftPadSize(2016, 9)).toEqual(6); // Oct 1 2016
    expect(lib.dayTableLeftPadSize(2016, 10)).toEqual(2); // Nov 1 2016
    expect(lib.dayTableLeftPadSize(2016, 11)).toEqual(4); // Dec 1 2016
  });

  it('should return left padding of day table', function() {
    expect(lib.dayTableRightPadSize(2016, 0)).toEqual(6); // Jan 1 2016
    expect(lib.dayTableRightPadSize(2016, 1)).toEqual(5); // Feb 1 2016
    expect(lib.dayTableRightPadSize(2016, 2)).toEqual(2); // Mar 1 2016
    expect(lib.dayTableRightPadSize(2016, 3)).toEqual(0); // Apr 1 2016
    expect(lib.dayTableRightPadSize(2016, 4)).toEqual(4); // May 1 2016
    expect(lib.dayTableRightPadSize(2016, 5)).toEqual(2); // Jun 1 2016
    expect(lib.dayTableRightPadSize(2016, 6)).toEqual(6); // Jul 1 2016
    expect(lib.dayTableRightPadSize(2016, 7)).toEqual(3); // Aug 1 2016
    expect(lib.dayTableRightPadSize(2016, 8)).toEqual(1); // Sep 1 2016
    expect(lib.dayTableRightPadSize(2016, 9)).toEqual(5); // Oct 1 2016
    expect(lib.dayTableRightPadSize(2016, 10)).toEqual(3); // Nov 1 2016
    expect(lib.dayTableRightPadSize(2016, 11)).toEqual(0); // Dec 1 2016
  });

  it('should return previous month', function() {
    const date = lib.previousMonth(2016, 0);
    expect(date instanceof Date).toBeTruthy();
    expect(date.getMonth()).toEqual(11);
    expect(date.getFullYear()).toEqual(2015);
  });

  it('should return days array', function() {
    const days = lib.daysArray(2016, 0);
    expect(Array.isArray(days)).toBeTruthy();
    expect(days.length).toEqual(lib.dayTableSize(2016, 0));
  });

  it('should return first day of date', function() {
    lib.startWeekWith(lib.SUNDAY);
    expect(lib.firstDayOfWeek(new Date(2016, 0, 1))).toEqual(new Date(2015, 11, 27));
    expect(lib.firstDayOfWeek(new Date(2016, 3, 9))).toEqual(new Date(2016, 3, 3));

    lib.startWeekWith(lib.MONDAY);
    expect(lib.firstDayOfWeek(new Date(2016, 0, 1))).toEqual(new Date(2015, 11, 28));
    expect(lib.firstDayOfWeek(new Date(2016, 0, 6))).toEqual(new Date(2016, 0, 4));
  });

  it('should return last day of specified week', function() {
    lib.startWeekWith(lib.SUNDAY);
    expect(lib.lastDayOfWeek(new Date(2016, 0, 1))).toEqual(new Date(2016, 0, 2));
    expect(lib.lastDayOfWeek(new Date(2016, 11, 1))).toEqual(new Date(2016, 11, 3));
    expect(lib.lastDayOfWeek(new Date(2016, 11, 30))).toEqual(new Date(2016, 11, 31));

    lib.startWeekWith(lib.MONDAY);
    expect(lib.lastDayOfWeek(new Date(2016, 0, 1))).toEqual(new Date(2016, 0, 3));
    expect(lib.lastDayOfWeek(new Date(2016, 11, 1))).toEqual(new Date(2016, 11, 4));
    expect(lib.lastDayOfWeek(new Date(2016, 11, 30))).toEqual(new Date(2017, 0, 1));
  });
});
