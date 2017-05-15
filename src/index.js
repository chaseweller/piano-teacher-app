import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './containers/Layout';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';


injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider >
  <AppLayout />
  </MuiThemeProvider>,
  document.getElementById('root')
);
