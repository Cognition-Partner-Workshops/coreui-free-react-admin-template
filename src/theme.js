import { createTheme } from '@mui/material/styles'

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#321fdb',
      light: '#5c4ee5',
      dark: '#2819af',
    },
    secondary: {
      main: '#9da5b1',
      light: '#b1b7c1',
      dark: '#636f83',
    },
    success: {
      main: '#2eb85c',
      light: '#51c97d',
      dark: '#1f9d4a',
    },
    info: {
      main: '#39f',
      light: '#66b0ff',
      dark: '#0077e6',
    },
    warning: {
      main: '#f9b115',
      light: '#fac144',
      dark: '#d69a0e',
    },
    error: {
      main: '#e55353',
      light: '#eb7575',
      dark: '#c93c3c',
    },
    background: {
      default: mode === 'dark' ? '#1e1e2d' : '#ebedef',
      paper: mode === 'dark' ? '#27293d' : '#ffffff',
    },
    text: {
      primary: mode === 'dark' ? '#ffffff' : '#3c4b64',
      secondary: mode === 'dark' ? '#b0b0b0' : '#768192',
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: mode === 'dark' ? '#1e1e2d' : '#3c4b64',
          color: '#ffffff',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'dark' ? '#27293d' : '#ffffff',
          color: mode === 'dark' ? '#ffffff' : '#3c4b64',
        },
      },
    },
  },
})

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode))

export default createAppTheme
