import { createTheme } from '@mui/material/styles'

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#321fdb',
      },
      secondary: {
        main: '#9da5b1',
      },
      success: {
        main: '#2eb85c',
      },
      info: {
        main: '#39f',
      },
      warning: {
        main: '#f9b115',
      },
      error: {
        main: '#e55353',
      },
      background: {
        default: mode === 'light' ? '#ebedef' : '#212631',
        paper: mode === 'light' ? '#fff' : '#282d37',
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
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: mode === 'light' ? '#3c4b64' : '#212631',
            color: 'rgba(255, 255, 255, 0.87)',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? '#fff' : '#282d37',
            color: mode === 'light' ? '#3c4b64' : 'rgba(255, 255, 255, 0.87)',
          },
        },
      },
    },
  })

export default getTheme
