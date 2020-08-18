import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': ['Montserrat'],
      },
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#008B8B',
    },
  },
});
