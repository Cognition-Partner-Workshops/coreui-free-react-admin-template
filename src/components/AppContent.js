import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import routes from '../routes'

const AppContent = () => {
  return (
    <Container maxWidth="xl">
      <Suspense
        fallback={
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <CircularProgress color="primary" />
          </Box>
        }
      >
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
