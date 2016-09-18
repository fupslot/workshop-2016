import React from 'react';
import ReactDOM from 'react-dom';
import Week from './week';

if (process.env.NODE_ENV === 'development') {
  require('./internals/svg-loader');
}

ReactDOM.render(
  <div>
    <h4>Workshop 2016</h4>
    <Week />
  </div>,
  document.querySelector('#app')
);
