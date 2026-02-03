import React from 'react'
import Box from '@mui/material/Box'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const drawerWidth = 256

const DefaultLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppSidebar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <AppHeader drawerWidth={drawerWidth} />
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <AppContent />
        </Box>
        <AppFooter />
      </Box>
    </Box>
  )
}

export default DefaultLayout
