import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Box, CircularProgress, Container, Fade } from '@mui/material'

import routes from '../routes'

const LoadingSpinner = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 200,
      py: 4,
    }}
  >
    <Fade in timeout={500}>
      <CircularProgress color="primary" />
    </Fade>
  </Box>
)

const AppContent = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </Container>
  )
}

export default React.memo(AppContent)
