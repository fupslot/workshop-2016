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

module.exports = {
  daysInMonth,
  weekDayOf1st,
  dayTableSize,
  dayTableLeftPadSize,
  dayTableRightPadSize
};
