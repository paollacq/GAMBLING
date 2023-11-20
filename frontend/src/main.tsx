import 'react-dom';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import { App } from './App';
import defaultTheme from './theme';
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);