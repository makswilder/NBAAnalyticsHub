import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#212529',
      dark: '#212529',
      light: '#adb5bd',
      contrastText: '#fff',
    },
    secondary: {
      main: '#495057',
      contrastText: '#fff',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
    text: {
      primary: '#212529',
      secondary: '#495057',
      disabled: '#adb5bd',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 600,
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 },
  },
});

export default theme;
