import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  direction: 'rtl',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1304,
      xl: 1536,
    },
  },
  palette: {
    mode: 'light',
    background: {
      default: "#222"
    },
    primary: {
      main: '#8be9fd',
      dark: '#01bee6'
    },
    secondary: {  
      main: '#bd93f9',
      dark: '#5e00e5'
    }
  },
  typography: {
    fontFamily: "tanha, vazir, Roboto",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none"
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  direction: 'rtl',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1304,
      xl: 1536,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#8be9fd',  
    },
    secondary: {
      main: '#bd93f9'
    }
  },
  typography: {
    fontFamily: "vazir, tahoma, Roboto",
  },
  
});
