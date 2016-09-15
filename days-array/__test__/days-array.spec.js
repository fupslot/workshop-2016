const lib = require('../');

describe('days-array', function() {
  beforeEach(function() {
    lib.startWeekWith(lib.SUNDAY);
  });

  it('should get an amount days in the given month', function() {
    expect(lib.daysInMonth(new Date(2016, 0, 1))).toEqual(31);
    expect(lib.daysInMonth(new Date(2016, 1, 1))).toEqual(29);
    expect(lib.daysInMonth(new Date(2016, 2, 1))).toEqual(31);
  });

  it('should return first day of date', function() {
    lib.startWeekWith(lib.SUNDAY);
    expect(lib.firstDayOfWeek(new Date(2016, 0, 3))).toEqual(new Date(2016, 0, 3));
    expect(lib.firstDayOfWeek(new Date(2016, 0, 6))).toEqual(new Date(2016, 0, 3));
    expect(lib.firstDayOfWeek(new Date(2016, 0, 9))).toEqual(new Date(2016, 0, 3));

    lib.startWeekWith(lib.MONDAY);
    expect(lib.firstDayOfWeek(new Date(2016, 0, 4))).toEqual(new Date(2016, 0, 4));
    expect(lib.firstDayOfWeek(new Date(2016, 0, 6))).toEqual(new Date(2016, 0, 4));
    expect(lib.firstDayOfWeek(new Date(2016, 0, 10))).toEqual(new Date(2016, 0, 4));
  });

  it('should return last day of specified week', function() {
    lib.startWeekWith(lib.SUNDAY);
    expect(lib.lastDayOfWeek(new Date(2016, 0, 17))).toEqual(new Date(2016, 0, 23));
    expect(lib.lastDayOfWeek(new Date(2016, 0, 19))).toEqual(new Date(2016, 0, 23));
    expect(lib.lastDayOfWeek(new Date(2016, 0, 23))).toEqual(new Date(2016, 0, 23));
    expect(lib.lastDayOfWeek(new Date(2016, 0, 31))).toEqual(new Date(2016, 1, 6));

    lib.startWeekWith(lib.MONDAY);
    expect(lib.lastDayOfWeek(new Date(2016, 0, 18))).toEqual(new Date(2016, 0, 24));
    expect(lib.lastDayOfWeek(new Date(2016, 0, 20))).toEqual(new Date(2016, 0, 24));
    expect(lib.lastDayOfWeek(new Date(2016, 0, 24))).toEqual(new Date(2016, 0, 24));
  });

  it('should return first date of a month', function() {
    expect(lib.firstDayOfMonth(new Date(2016, 2, 22))).toEqual(new Date(2016, 2, 1));
    expect(lib.firstDayOfMonth(new Date(2016, 1, 29))).toEqual(new Date(2016, 1, 1));
    expect(lib.firstDayOfMonth(new Date(2016, 1, 1))).toEqual(new Date(2016, 1, 1));
    expect(lib.firstDayOfMonth(new Date(2016, 1, 20))).toEqual(new Date(2016, 1, 1));
    expect(lib.firstDayOfMonth(new Date(2016, 1, 14))).toEqual(new Date(2016, 1, 1));
  });

  it('should return last day of a month', function() {
    expect(lib.lastDayOfMonth(new Date(2016, 0, 1))).toEqual(new Date(2016, 0, 31));
    expect(lib.lastDayOfMonth(new Date(2016, 0, 31))).toEqual(new Date(2016, 0, 31));
    expect(lib.lastDayOfMonth(new Date(2016, 2, 1))).toEqual(new Date(2016, 2, 31));
  });

  it('should return previous month', function() {
    expect(lib.previousMonth(new Date(2016, 1, 1))).toEqual(new Date(2016, 0, 1));
    expect(lib.previousMonth(new Date(2016, 0, 31))).toEqual(new Date(2015, 11, 31));
    expect(lib.previousMonth(new Date(2016, 1, 29))).toEqual(new Date(2016, 0, 29));
    expect(lib.previousMonth(new Date(2016, 2, 31))).toEqual(new Date(2016, 1, 29));
  });

  it('should return next day', function() {
    lib.startWeekWith(lib.MONDAY);
    expect(lib.nextDay(new Date(2016, 0, 1))).toEqual(new Date(2016, 0, 2));
    expect(lib.nextDay(new Date(2016, 0, 2))).toEqual(new Date(2016, 0, 3));
  });

  it('should return last date of last week month (sunday)', function() {
    lib.startWeekWith(lib.SUNDAY);

    expect(
      lib.lastDayOfWeek(
        lib.lastDayOfMonth(new Date(2016, 2, 31))
      )
    ).toEqual(new Date(2016, 3, 2));

    expect(
      lib.lastDayOfWeek(
        lib.lastDayOfMonth(new Date(2016, 2, 1))
      )
    ).toEqual(new Date(2016, 3, 2));

    expect(
      lib.lastDayOfWeek(
        lib.lastDayOfMonth(new Date(2016, 2, 19))
      )
    ).toEqual(new Date(2016, 3, 2));

    expect(
      lib.lastDayOfWeek(
        lib.lastDayOfMonth(new Date(2016, 3, 1))
      )
    ).toEqual(new Date(2016, 3, 30));
  });

  it('should return last date of last week month (monday)', function() {
    lib.startWeekWith(lib.MONDAY);

    expect(
      lib.lastDayOfWeek(
        lib.lastDayOfMonth(new Date(2016, 2, 31))
      )
    ).toEqual(new Date(2016, 3, 3));

    expect(
      lib.lastDayOfWeek(
        lib.lastDayOfMonth(new Date(2016, 2, 1))
      )
    ).toEqual(new Date(2016, 3, 3));

    expect(
      lib.lastDayOfWeek(
        lib.lastDayOfMonth(new Date(2016, 2, 19))
      )
    ).toEqual(new Date(2016, 3, 3));

    expect(
      lib.lastDayOfWeek(
        lib.lastDayOfMonth(new Date(2016, 3, 1))
      )
    ).toEqual(new Date(2016, 4, 1));
  });
});
