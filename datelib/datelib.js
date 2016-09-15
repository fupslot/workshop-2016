const SUNDAY = 0;
const MONDAY = 1;

let _startWeekWith = SUNDAY;

function startWeekWith(day) {
  _startWeekWith = day === SUNDAY ? SUNDAY : MONDAY;
}

/**
 * daysInMonth
 * Returns number of days in a specified month
 * @param  {date} date  Date
 * @return {number}
 */
function daysInMonth(date) {
  return new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
}

/**
 * previousMonth
 * Returns a previuos month of a given date
 * @param  {date} date Date
 * @return {date}
 */
function previousMonth(date) {
  const prev = copyDate(date);
  prev.setDate(1);
  prev.setMonth(prev.getMonth() - 1);

  const daysInPrevMonth = daysInMonth(prev);
  let currDate = date.getDate();
  if (daysInPrevMonth < currDate) {
    currDate = daysInPrevMonth;
  }
  prev.setDate(currDate);
  return prev;
}

/**
 * nextDay
 * Returns a next day of a given date
 * @param  {date} date Date
 * @return {date}
 */
function nextDay(date) {
  const copy = copyDate(date);
  copy.setDate(copy.getDate() + 1);
  return copy;
}

/**
 * firstDateOfMonth
 * Returns a first date of a given month
 * @param  {date} date Date
 * @return {date}
 */
function firstDateOfMonth(date) {
  const first = copyDate(date);
  first.setDate(1);
  return first;
}

/**
 * lastDateOfMonth
 * Returns a last date of a given month
 * @param  {date} date Date
 * @return {date}
 */
function lastDateOfMonth(date) {
  const copy = copyDate(date);
  copy.setDate(daysInMonth(date));
  return copy;
}

/**
 * firstDayOfWeek
 * Returns a first day of a given week
 * @param  {date} date Date
 * @return {date}
 */
function firstDayOfWeek(date) {
  const curr = copyDate(date);
  const day = curr.getDay();
  // startWeekWith (0 - sunday; 1 - monday;)
  const shift = _startWeekWith === MONDAY ? (day === 0 ? -6 : 1) : 0;
  const diff = curr.getDate() - day + shift;
  curr.setDate(diff);
  return curr;
}

/**
 * lastDayOfWeek
 * Returns a last day of a given week
 * @param  {date} date Date
 * @return {date}
 */
function lastDayOfWeek(date) {
  const first = firstDayOfWeek(date);
  first.setDate(first.getDate() + 6);
  return first;
}

/*
 * copyDate
 * Return a copy of a given date object
 * @param  {date} date Date
 * @return {date}
 */
function copyDate(date) {
  return new Date(date.getTime());
}


module.exports = {
  previousMonth,
  daysInMonth,
  lastDateOfMonth,
  firstDateOfMonth,
  nextDay,
  firstDayOfWeek,
  lastDayOfWeek,
  startWeekWith,
  SUNDAY,
  MONDAY
};
