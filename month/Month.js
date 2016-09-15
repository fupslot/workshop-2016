import React, { PropTypes } from 'react';
import datelib from '../datelib';

// function daysArray(date) {
//   const first = firstDayOfMonth(date);
//   const last = lastDayOfWeek(lastDayOfMonth(date));
//
//   const dayMS = 24 * 60 * 60 * 1000;
//   const days = ((last - first) / dayMS) + 1;
//
//   const arr = Array(days);
//   arr[0] = first;
//   arr[arr.length - 1] = last;
//
//   for (var i = 1; i < days; i++) {
//     arr[i] = nextDay(arr[i - 1]);
//   }
//
//   return arr;
// }

function Week(props) {
  return (
    <span>{'week' + props.index}</span>
  );
}

export default class Month extends React.Component {
  static defaultProps = {
    firstDayOfWeek: 0
  };

  static propTypes = {
    firstDayOfWeek: PropTypes.number,
    date: PropTypes.instanceOf(Date)
  }

  constructor(props) {
    super();

    this.firstDateOfMonth = datelib.firstDateOfMonth(props.date);
    this.lastDateOfMonth = datelib.lastDateOfMonth(props.date);
  }

  renderMonth() {
    const rows = this.month.length / 7;
    const weeks = [];
    for (var i = 0; i < rows; i++) {
      weeks.push(
        <Week
          key={`week_${i}`}
          index={i}
          month={this.month} />
      );
    }
    return weeks;
  }

  render() {
    return (
      <div>not implemented yet!</div>
    );
  }
}
