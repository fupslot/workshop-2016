const SUNDAY = 0;
const MONDAY = 1;

let _startWeekWith = SUNDAY;

function startWeekWith(day) {
  _startWeekWith = day === SUNDAY ? SUNDAY : MONDAY;
}

function createDate(y=1900, m=1, d=0, h=0, min=0, sec=0, msec=0) {
  return new Date(Date.UTC(y, m, d, h, min, sec, msec));
}

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

function daysInMonthD(date) {
  return new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
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

function nextDayD(date) {
  const copy = copyDate(date);
  copy.setDate(copy.getDate() + 1);
  return copy;
}

function daysArrayD(date) {
  console.log(date.toLocaleDateString());
  const first = firstDayOfWeek(date);
  console.log(first.toLocaleDateString());
  const last = lastDayOfMonth(date);
  console.log(last.toLocaleDateString());
  console.log(lastDayOfWeek(last).toLocaleDateString());
  // console.log(last);
  // const days = (last - first) / (24 * 60 * 60 * 1000);
  // const arr = Array(days);
  // arr[0] = first;
  // arr[arr.length - 1] = last;
  //
  // for (var i = 1; i < days - 1; i++) {
  //   arr[i] = nextDayD(first);
  // }
  //
  // return arr;
}

function lastDayOfMonth(date) {
  const copy = copyDate(date);
  copy.setDate(daysInMonthD(date));
  return copy;
}

function firstDayOfWeek(date) {
  const curr = copyDate(date);
  const day = curr.getDay();
  // startWeekWith (0 - sunday; 1 - monday;)
  const shift = _startWeekWith === MONDAY ? (day === 0 ? -6 : 1) : 0;
  const diff = curr.getDate() - day + shift;
  curr.setDate(diff);
  return curr;
}

function copyDate(date) {
  return new Date(date.getTime());
}

function lastDayOfWeek(date) {
  const first = firstDayOfWeek(date);
  first.setDate(first.getDate() + 6);
  return first;
}


module.exports = {
  previousMonth,
  daysInMonth,
  daysInMonthD,
  weekDayOf1st,
  lastDayOfMonth,
  dayTableSize,
  dayTableLeftPadSize,
  dayTableRightPadSize,
  daysArray,
  daysArrayD,
  firstDayOfWeek,
  lastDayOfWeek,
  startWeekWith,
  createDate,
  SUNDAY,
  MONDAY
};
