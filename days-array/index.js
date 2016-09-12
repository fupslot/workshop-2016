/**
 * daysInMonth
 * Returns number of days in a specified month
 * @param  {number} year  Year
 * @param  {number} month Month
 * @return {number}
 */
function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * weekDayOf1st
 * Returns a day of a week on the 1s in specified month (0 - based)
 * @param  {number} year  Year
 * @param  {number} month Month
 * @return {number}
 */
function weekDayOf1st(year, month) {
  return new Date(year, month, 1).getDay();
}


function dayTableSize(year, month) {
  const daysCount = daysInMonth(year, month);
  const padLeft = dayTableLeftPadSize(year, month);
  const padRight = dayTableRightPadSize(year, month);
  return daysCount + padLeft + padRight;
}

function dayTableLeftPadSize(year, month) {
  return weekDayOf1st(year, month);
}

function dayTableRightPadSize(year, month) {
  return 7 - (new Date(year, month + 1, 0).getDay() + 1);
}

function previousMonth(year, month) {
  const date = new Date(year, month, 1);
  date.setMonth(date.getMonth() - 1);
  return date;
}

function daysArray(year, month) {
  const daysCount = daysInMonth(year, month);
  const prevMonth = previousMonth(year, month);
  const daysInCurrMonth = daysInMonth(year, month);
  const daysInPrevMonth = daysInMonth(
    prevMonth.getFullYear(),
    prevMonth.getMonth()
  );

  const days = [];
  let i = -dayTableLeftPadSize(year, month);
  const l = daysCount + dayTableRightPadSize(year, month);
  for (; i < l; i++) {
    if ( i <= 0) {
      days.push(daysInPrevMonth + i);
    } else if (i > daysInCurrMonth) {
      days.push(i - daysInCurrMonth);
    } else {
      days.push(i);
    }
  }
  return days;
}


module.exports = {
  previousMonth,
  daysInMonth,
  weekDayOf1st,
  dayTableSize,
  dayTableLeftPadSize,
  dayTableRightPadSize,
  daysArray
};
