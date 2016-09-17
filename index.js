import React from 'react';
import ReactDOM from 'react-dom';

if (process.env.NODE_ENV === 'development') {
  require('./internals/svg-loader');
}

ReactDOM.render(
  <div>
    <h4>Workshop 2016</h4>
      <svg width="16px" height="16px">
        <use xlinkHref="#glyph-task-prev" />
      </svg>
  </div>,
  document.querySelector('#app')
);
