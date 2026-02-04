import React, { Suspense, useEffect, useMemo } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'

import { createAppTheme } from './theme'

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const LoadingFallback = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}
  >
    <Fade in timeout={800}>
      <CircularProgress color="primary" size={48} />
    </Fade>
  </Box>
)

const App = () => {
  const dispatch = useDispatch()
  const storedTheme = useSelector((state) => state.theme)

  const theme = useMemo(() => createAppTheme(storedTheme), [storedTheme])

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const themeParam = urlParams.get('theme')
    if (themeParam && (themeParam === 'light' || themeParam === 'dark')) {
      dispatch({ type: 'set', theme: themeParam })
    }
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Suspense fallback={<LoadingFallback />}>
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
