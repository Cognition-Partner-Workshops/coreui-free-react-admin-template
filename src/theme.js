import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#321fdb',
      light: '#5850ec',
      dark: '#2819b0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#9da5b1',
      light: '#b1b7c1',
      dark: '#636f83',
      contrastText: '#fff',
    },
    success: {
      main: '#2eb85c',
      light: '#51c97e',
      dark: '#1b9e3e',
      contrastText: '#fff',
    },
    info: {
      main: '#39f',
      light: '#66b0ff',
      dark: '#0077e6',
      contrastText: '#fff',
    },
    warning: {
      main: '#f9b115',
      light: '#fac043',
      dark: '#c78e11',
      contrastText: '#000',
    },
    error: {
      main: '#e55353',
      light: '#ea7575',
      dark: '#b84242',
      contrastText: '#fff',
    },
    background: {
      default: '#ebedef',
      paper: '#fff',
    },
    text: {
      primary: '#3c4b64',
      secondary: '#768192',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#3c4b64',
          color: 'rgba(255, 255, 255, 0.87)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#3c4b64',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
})

export const darkTheme = createTheme({
  ...theme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#321fdb',
      light: '#5850ec',
      dark: '#2819b0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#9da5b1',
      light: '#b1b7c1',
      dark: '#636f83',
      contrastText: '#fff',
    },
    success: {
      main: '#2eb85c',
      light: '#51c97e',
      dark: '#1b9e3e',
      contrastText: '#fff',
    },
    info: {
      main: '#39f',
      light: '#66b0ff',
      dark: '#0077e6',
      contrastText: '#fff',
    },
    warning: {
      main: '#f9b115',
      light: '#fac043',
      dark: '#c78e11',
      contrastText: '#000',
    },
    error: {
      main: '#e55353',
      light: '#ea7575',
      dark: '#b84242',
      contrastText: '#fff',
    },
    background: {
      default: '#1a1a2e',
      paper: '#212631',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.6)',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1a1a2e',
          color: 'rgba(255, 255, 255, 0.87)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#212631',
          color: 'rgba(255, 255, 255, 0.87)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          backgroundColor: '#212631',
        },
      },
    },
  },
})

export default theme
