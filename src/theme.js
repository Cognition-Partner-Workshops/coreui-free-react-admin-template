import { createTheme } from '@mui/material/styles'

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#321fdb',
        light: '#5c4ce2',
        dark: '#2316a0',
      },
      secondary: {
        main: '#9da5b1',
        light: '#b1b7c1',
        dark: '#6c757d',
      },
      success: {
        main: '#2eb85c',
        light: '#51c97d',
        dark: '#1f8040',
      },
      info: {
        main: '#39f',
        light: '#66b0ff',
        dark: '#2673b3',
      },
      warning: {
        main: '#f9b115',
        light: '#fac144',
        dark: '#ae7c0e',
      },
      error: {
        main: '#e55353',
        light: '#eb7575',
        dark: '#a03a3a',
      },
      background: {
        default: mode === 'dark' ? '#1a1a2e' : '#ebedef',
        paper: mode === 'dark' ? '#2d2d44' : '#ffffff',
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
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: mode === 'dark' ? '#1a1a2e' : '#3c4b64',
            color: 'rgba(255, 255, 255, 0.87)',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'dark' ? '#2d2d44' : '#ffffff',
            color: mode === 'dark' ? '#ffffff' : '#3c4b64',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
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
    },
  })

export default getTheme
