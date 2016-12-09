import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reactTapEventPlugin from 'react-tap-event-plugin';

import Layout from './Layout';

reactTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Layout />
  </MuiThemeProvider>,
  document.getElementById('app')
);
