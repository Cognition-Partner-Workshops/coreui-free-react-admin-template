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
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          marginLeft: { sm: sidebarShow ? 0 : `-${drawerWidth}px` },
          transition: 'margin 0.3s ease',
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
