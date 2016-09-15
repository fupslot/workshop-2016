# datelib

Simple date library.

    Note: Methods do not mutate a given `Date` object. Instead, a copy will be returned.

## API Reference

### daysInMonth(Date): Number

Returns number of days in a given month.

Example:

```javascript
expect(datelib.daysInMonth(new Date(2016, 0, 1))).toEqual(31);
expect(datelib.daysInMonth(new Date(2016, 1, 1))).toEqual(29);
```

### previousMonth(Date): Date

Returns a previuos month of a given date.

Example:

```js
expect(
  datelib.previousMonth(new Date(2016, 0, 31))
).toEqual(new Date(2015, 11, 31));
```


### firstDateOfMonth(Date): Date

Returns a first date of a given month.

Example:

```js
expect(
  datelib.firstDateOfMonth(new Date(2016, 1, 29))
).toEqual(new Date(2016, 1, 1));
```


### lastDateOfMonth(Date): Date

Returns a last date of a given month.

Example:

```js
expect(
  datelib.lastDateOfMonth(new Date(2016, 0, 1))
).toEqual(new Date(2016, 0, 31));
```


### firstDayOfWeek(Date): Date

Returns a first date of a given week.

Example:

```js
datelib.startWeekWith(datelib.SUNDAY);
expect(
  datelib.firstDayOfWeek(new Date(2016, 0, 3))
).toEqual(new Date(2016, 0, 3));

datelib.startWeekWith(datelib.MONDAY);
expect(
  datelib.firstDayOfWeek(new Date(2016, 0, 4))
).toEqual(new Date(2016, 0, 4));
```


### lastDayOfWeek(Date): Date

Returns a last date of a given week.

Example:

```js
datelib.startWeekWith(datelib.SUNDAY);
expect(
  datelib.lastDayOfWeek(new Date(2016, 0, 17))
).toEqual(new Date(2016, 0, 23));

datelib.startWeekWith(datelib.MONDAY);
expect(
  datelib.lastDayOfWeek(new Date(2016, 0, 18))
).toEqual(new Date(2016, 0, 24));
```
