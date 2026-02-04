import { createTheme, alpha } from '@mui/material/styles'

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#321fdb',
            light: '#5c4de0',
            dark: '#2316a0',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#9da5b1',
            light: '#b1b7c1',
            dark: '#6c757d',
            contrastText: '#ffffff',
          },
          success: {
            main: '#2eb85c',
            light: '#51c97a',
            dark: '#1f9d4a',
            contrastText: '#ffffff',
          },
          info: {
            main: '#39f',
            light: '#66b0ff',
            dark: '#0066cc',
            contrastText: '#ffffff',
          },
          warning: {
            main: '#f9b115',
            light: '#fac043',
            dark: '#c78c0e',
            contrastText: '#000000',
          },
          error: {
            main: '#e55353',
            light: '#ea7575',
            dark: '#b83c3c',
            contrastText: '#ffffff',
          },
          background: {
            default: '#ebedef',
            paper: '#ffffff',
          },
          text: {
            primary: '#3c4b64',
            secondary: '#768192',
          },
          divider: 'rgba(0, 0, 21, 0.125)',
        }
      : {
          primary: {
            main: '#6c5dd3',
            light: '#8a7fdc',
            dark: '#4d42a3',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#9da5b1',
            light: '#b1b7c1',
            dark: '#6c757d',
            contrastText: '#ffffff',
          },
          success: {
            main: '#2eb85c',
            light: '#51c97a',
            dark: '#1f9d4a',
            contrastText: '#ffffff',
          },
          info: {
            main: '#39f',
            light: '#66b0ff',
            dark: '#0066cc',
            contrastText: '#ffffff',
          },
          warning: {
            main: '#f9b115',
            light: '#fac043',
            dark: '#c78c0e',
            contrastText: '#000000',
          },
          error: {
            main: '#e55353',
            light: '#ea7575',
            dark: '#b83c3c',
            contrastText: '#ffffff',
          },
          background: {
            default: '#1a1a2e',
            paper: '#212631',
          },
          text: {
            primary: '#ffffff',
            secondary: 'rgba(255, 255, 255, 0.7)',
          },
          divider: 'rgba(255, 255, 255, 0.12)',
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
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
          marginBottom: 4,
          '&.Mui-selected': {
            backgroundColor: alpha(theme.palette.primary.main, 0.12),
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.main, 0.18),
            },
          },
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 600,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
      },
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
})

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode))

export const drawerWidth = 256
export const collapsedDrawerWidth = 64
