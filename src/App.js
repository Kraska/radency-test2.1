import React from 'react';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import MainLayout from "./layout/MainLayout";

function App() {
  return (
      <MuiThemeProvider theme={theme}>
        <MainLayout />
      </MuiThemeProvider>
  );
}

export default App;
