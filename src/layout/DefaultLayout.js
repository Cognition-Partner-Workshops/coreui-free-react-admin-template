import React from 'react'
import { useSelector } from 'react-redux'
import { Box, useTheme, useMediaQuery } from '@mui/material'

import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { drawerWidth, collapsedDrawerWidth } from '../theme'

const DefaultLayout = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'))
  const sidebarUnfoldable = useSelector((state) => state.sidebarUnfoldable)

  const currentDrawerWidth = sidebarUnfoldable ? collapsedDrawerWidth : drawerWidth

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: { lg: `calc(100% - ${currentDrawerWidth}px)` },
          transition: theme.transitions.create(['width', 'margin'], {
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        <AppHeader />
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: 'background.default',
          }}
        >
          <AppContent />
        </Box>
        <AppFooter />
      </Box>
    </Box>
  )
}

export default DefaultLayout
