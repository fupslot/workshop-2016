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
 * Returns previuos month of a given date
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

function daysArray(date) {
  const first = firstDayOfWeek(date);
  const last = lastDayOfWeek(new Date(2016, 0, 31));
  const dayMS = 24 * 60 * 60 * 1000;
  const days = ((last - first) / dayMS) + 1;

  const arr = Array(days);
  arr[0] = first;
  arr[arr.length - 1] = last;

  for (var i = 1; i < days; i++) {
    arr[i] = nextDay(arr[i - 1]);
  }

  return arr;
}

/**
 * lastDayOfMonth
 * Returns the last day of a given month
 * @param  {date} date Date
 * @return {date}
 */
function lastDayOfMonth(date) {
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
  lastDayOfMonth,
  daysArray,
  nextDay,
  firstDayOfWeek,
  lastDayOfWeek,
  startWeekWith,
  SUNDAY,
  MONDAY
};
