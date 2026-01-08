import { createTheme } from '@mui/material/styles'

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#321fdb',
      light: '#5c4ee5',
      dark: '#2819af',
      contrastText: '#fff',
    },
    secondary: {
      main: '#9da5b1',
      light: '#b1b7c1',
      dark: '#7d858e',
      contrastText: '#fff',
    },
    success: {
      main: '#2eb85c',
      light: '#51c97c',
      dark: '#259349',
      contrastText: '#fff',
    },
    info: {
      main: '#39f',
      light: '#66b0ff',
      dark: '#2982cc',
      contrastText: '#fff',
    },
    warning: {
      main: '#f9b115',
      light: '#fac143',
      dark: '#c78e11',
      contrastText: '#000',
    },
    error: {
      main: '#e55353',
      light: '#ea7575',
      dark: '#b74242',
      contrastText: '#fff',
    },
    background: {
      default: mode === 'dark' ? '#212631' : '#ebedef',
      paper: mode === 'dark' ? '#282d37' : '#fff',
    },
    text: {
      primary: mode === 'dark' ? '#fff' : '#3c4b64',
      secondary: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(60, 75, 100, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
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
  shape: {
    borderRadius: 4,
  },
  components: {
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
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: mode === 'dark' ? '#212631' : '#3c4b64',
          color: 'rgba(255, 255, 255, 0.87)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'dark' ? '#282d37' : '#fff',
          color: mode === 'dark' ? '#fff' : '#3c4b64',
        },
      },
    },
  },
})

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode))

export const lightTheme = createAppTheme('light')
export const darkTheme = createAppTheme('dark')
