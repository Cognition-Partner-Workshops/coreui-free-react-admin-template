import React, { Suspense, useMemo, useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const getInitialMode = (storedTheme) => {
  const urlParams = new URLSearchParams(window.location.href.split('?')[1])
  const urlTheme = urlParams.get('theme')?.match(/^[A-Za-z0-9\s]+/)?.[0]
  if (urlTheme && (urlTheme === 'light' || urlTheme === 'dark')) {
    return urlTheme
  }
  return storedTheme || 'light'
}

const App = () => {
  const storedTheme = useSelector((state) => state.theme)
  const [mode] = useState(() => getInitialMode(storedTheme))

  const theme = useMemo(
    () =>
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
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        },
        components: {
          MuiDrawer: {
            styleOverrides: {
              paper: {
                backgroundColor: mode === 'dark' ? '#1e1e2d' : '#3c4b64',
                color: 'rgba(255, 255, 255, 0.87)',
              },
            },
          },
        },
      }),
    [mode],
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Suspense
          fallback={
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
              }}
            >
              <CircularProgress color="primary" />
            </Box>
          }
        >
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
