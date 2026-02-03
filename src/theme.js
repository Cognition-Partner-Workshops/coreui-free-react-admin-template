import { createTheme } from '@mui/material/styles'

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#321fdb',
            light: '#5850ec',
            dark: '#2819b0',
          },
          secondary: {
            main: '#9da5b1',
            light: '#c4c9d0',
            dark: '#636f83',
          },
          success: {
            main: '#2eb85c',
            light: '#51c97a',
            dark: '#1e9c4a',
          },
          info: {
            main: '#39f',
            light: '#66b0ff',
            dark: '#0080ff',
          },
          warning: {
            main: '#f9b115',
            light: '#fac043',
            dark: '#d99a0e',
          },
          error: {
            main: '#e55353',
            light: '#ea7575',
            dark: '#c93c3c',
          },
          background: {
            default: '#ebedef',
            paper: '#ffffff',
          },
          text: {
            primary: '#3c4b64',
            secondary: '#768192',
          },
        }
      : {
          primary: {
            main: '#5c6bc0',
            light: '#8e99c4',
            dark: '#3949ab',
          },
          secondary: {
            main: '#9da5b1',
            light: '#c4c9d0',
            dark: '#636f83',
          },
          success: {
            main: '#2eb85c',
            light: '#51c97a',
            dark: '#1e9c4a',
          },
          info: {
            main: '#39f',
            light: '#66b0ff',
            dark: '#0080ff',
          },
          warning: {
            main: '#f9b115',
            light: '#fac043',
            dark: '#d99a0e',
          },
          error: {
            main: '#e55353',
            light: '#ea7575',
            dark: '#c93c3c',
          },
          background: {
            default: '#212631',
            paper: '#2c3240',
          },
          text: {
            primary: '#ffffff',
            secondary: '#b0b8c4',
          },
        }),
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
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 256,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
})

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode))

export default createAppTheme
