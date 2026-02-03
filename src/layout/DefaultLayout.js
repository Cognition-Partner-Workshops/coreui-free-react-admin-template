import React from 'react'
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const drawerWidth = 256

const DefaultLayout = () => {
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <Box sx={{ display: 'flex' }}>
      <AppSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: { sm: `calc(100% - ${sidebarShow ? drawerWidth : 0}px)` },
          ml: { sm: sidebarShow ? `${drawerWidth}px` : 0 },
          transition: 'margin-left 0.3s, width 0.3s',
        }}
      >
        <AppHeader />
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <AppContent />
        </Box>
        <AppFooter />
      </Box>
    </Box>
  )
}

export default DefaultLayout
