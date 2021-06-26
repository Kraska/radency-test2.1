import React from 'react';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Main from "./pages/Main";

function App() {
  return (
      <MuiThemeProvider theme={theme}>
        <Main />
      </MuiThemeProvider>
  );
}

export default App;
