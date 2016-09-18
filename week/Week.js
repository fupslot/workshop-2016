import React from 'react';
require('./Week.scss');

export default function Week() {
  return (
    <div className="Week">
      <div className="Week__day Week__day--out">31</div>
      <div className="Week__day Week__day--marked">1</div>
      <div className="Week__day">2</div>
      <div className="Week__day Week__day--start">3</div>
      <div className="Week__day Week__day--in">4</div>
      <div className="Week__day Week__day--end">5</div>
      <div className="Week__day">6</div>
    </div>
  );
}
