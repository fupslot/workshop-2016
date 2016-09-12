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


function paddedDaysArrayOfMonth(year, month) {
  // 1. how many days in the current month
  // 2. which day of the week is the 1st
  const daysCount = daysInMonth(year, month); // 31
  // console.log('daysCount', daysCount);
  let padLeft = weekDayOf1st(year, month);
  // console.log('padLeft', padLeft);

  let padRight = (daysCount + padLeft) % 7;
  // console.log('padRight', (daysCount + padLeft));
  if (padRight !== 0) {
    padRight = 7 - padRight;
  }
  return daysCount + padLeft + padRight;
}


module.exports = {
  daysInMonth,
  weekDayOf1st,
  paddedDaysArrayOfMonth
};
