const datelib = require('../');

describe('datelib', function() {
  beforeEach(function() {
    datelib.startWeekWith(datelib.SUNDAY);
  });

  it('should get an amount days in the given month', function() {
    expect(datelib.daysInMonth(new Date(2016, 0, 1))).toEqual(31);
    expect(datelib.daysInMonth(new Date(2016, 1, 1))).toEqual(29);
    expect(datelib.daysInMonth(new Date(2016, 2, 1))).toEqual(31);
  });

  it('should return first day of date', function() {
    datelib.startWeekWith(datelib.SUNDAY);
    expect(datelib.firstDayOfWeek(new Date(2016, 0, 3))).toEqual(new Date(2016, 0, 3));
    expect(datelib.firstDayOfWeek(new Date(2016, 0, 6))).toEqual(new Date(2016, 0, 3));
    expect(datelib.firstDayOfWeek(new Date(2016, 0, 9))).toEqual(new Date(2016, 0, 3));

    datelib.startWeekWith(datelib.MONDAY);
    expect(datelib.firstDayOfWeek(new Date(2016, 0, 4))).toEqual(new Date(2016, 0, 4));
    expect(datelib.firstDayOfWeek(new Date(2016, 0, 6))).toEqual(new Date(2016, 0, 4));
    expect(datelib.firstDayOfWeek(new Date(2016, 0, 10))).toEqual(new Date(2016, 0, 4));
  });

  it('should return last day of specified week', function() {
    datelib.startWeekWith(datelib.SUNDAY);
    expect(datelib.lastDayOfWeek(new Date(2016, 0, 17))).toEqual(new Date(2016, 0, 23));
    expect(datelib.lastDayOfWeek(new Date(2016, 0, 19))).toEqual(new Date(2016, 0, 23));
    expect(datelib.lastDayOfWeek(new Date(2016, 0, 23))).toEqual(new Date(2016, 0, 23));
    expect(datelib.lastDayOfWeek(new Date(2016, 0, 31))).toEqual(new Date(2016, 1, 6));

    datelib.startWeekWith(datelib.MONDAY);
    expect(datelib.lastDayOfWeek(new Date(2016, 0, 18))).toEqual(new Date(2016, 0, 24));
    expect(datelib.lastDayOfWeek(new Date(2016, 0, 20))).toEqual(new Date(2016, 0, 24));
    expect(datelib.lastDayOfWeek(new Date(2016, 0, 24))).toEqual(new Date(2016, 0, 24));
  });

  it('should return first date of a month', function() {
    expect(datelib.firstDateOfMonth(new Date(2016, 2, 22))).toEqual(new Date(2016, 2, 1));
    expect(datelib.firstDateOfMonth(new Date(2016, 1, 29))).toEqual(new Date(2016, 1, 1));
    expect(datelib.firstDateOfMonth(new Date(2016, 1, 1))).toEqual(new Date(2016, 1, 1));
    expect(datelib.firstDateOfMonth(new Date(2016, 1, 20))).toEqual(new Date(2016, 1, 1));
    expect(datelib.firstDateOfMonth(new Date(2016, 1, 14))).toEqual(new Date(2016, 1, 1));
  });

  it('should return last day of a month', function() {
    expect(datelib.lastDateOfMonth(new Date(2016, 0, 1))).toEqual(new Date(2016, 0, 31));
    expect(datelib.lastDateOfMonth(new Date(2016, 0, 31))).toEqual(new Date(2016, 0, 31));
    expect(datelib.lastDateOfMonth(new Date(2016, 2, 1))).toEqual(new Date(2016, 2, 31));
  });

  it('should return previous month', function() {
    expect(datelib.previousMonth(new Date(2016, 1, 1))).toEqual(new Date(2016, 0, 1));
    expect(datelib.previousMonth(new Date(2016, 0, 31))).toEqual(new Date(2015, 11, 31));
    expect(datelib.previousMonth(new Date(2016, 1, 29))).toEqual(new Date(2016, 0, 29));
    expect(datelib.previousMonth(new Date(2016, 2, 31))).toEqual(new Date(2016, 1, 29));
  });

  it('should return next day', function() {
    datelib.startWeekWith(datelib.MONDAY);
    expect(datelib.nextDay(new Date(2016, 0, 1))).toEqual(new Date(2016, 0, 2));
    expect(datelib.nextDay(new Date(2016, 0, 2))).toEqual(new Date(2016, 0, 3));
  });

  it('should return last date of last week month (sunday)', function() {
    datelib.startWeekWith(datelib.SUNDAY);

    expect(
      datelib.lastDayOfWeek(
        datelib.lastDateOfMonth(new Date(2016, 2, 31))
      )
    ).toEqual(new Date(2016, 3, 2));

    expect(
      datelib.lastDayOfWeek(
        datelib.lastDateOfMonth(new Date(2016, 2, 1))
      )
    ).toEqual(new Date(2016, 3, 2));

    expect(
      datelib.lastDayOfWeek(
        datelib.lastDateOfMonth(new Date(2016, 2, 19))
      )
    ).toEqual(new Date(2016, 3, 2));

    expect(
      datelib.lastDayOfWeek(
        datelib.lastDateOfMonth(new Date(2016, 3, 1))
      )
    ).toEqual(new Date(2016, 3, 30));
  });

  it('should return last date of last week month (monday)', function() {
    datelib.startWeekWith(datelib.MONDAY);

    expect(
      datelib.lastDayOfWeek(
        datelib.lastDateOfMonth(new Date(2016, 2, 31))
      )
    ).toEqual(new Date(2016, 3, 3));

    expect(
      datelib.lastDayOfWeek(
        datelib.lastDateOfMonth(new Date(2016, 2, 1))
      )
    ).toEqual(new Date(2016, 3, 3));

    expect(
      datelib.lastDayOfWeek(
        datelib.lastDateOfMonth(new Date(2016, 2, 19))
      )
    ).toEqual(new Date(2016, 3, 3));

    expect(
      datelib.lastDayOfWeek(
        datelib.lastDateOfMonth(new Date(2016, 3, 1))
      )
    ).toEqual(new Date(2016, 4, 1));
  });
});
