import React from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const drawerWidth = 256

const DefaultLayout = ({ toggleTheme }) => {
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
          transition: 'margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
        }}
      >
        <AppHeader toggleTheme={toggleTheme} />
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <AppContent />
        </Box>
        <AppFooter />
      </Box>
    </Box>
  )
}

export default DefaultLayout
