import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

import { AppSidebarNav } from './AppSidebarNav'
import navigation from '../_nav'

const drawerWidth = 256

const AppSidebar = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleDrawerClose = () => {
    dispatch({ type: 'set', sidebarShow: false })
  }

  const drawerContent = (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          minHeight: 64,
        }}
      >
        <Typography variant="h6" noWrap component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
          CoreUI MUI
        </Typography>
        {isMobile && (
          <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
            <ChevronLeftIcon />
          </IconButton>
        )}
      </Box>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />
      <AppSidebarNav items={navigation} />
    </>
  )

  return (
    <Box
      component="nav"
      sx={{ width: { sm: sidebarShow ? drawerWidth : 0 }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        open={sidebarShow}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            bgcolor: '#3c4b64',
            color: 'rgba(255, 255, 255, 0.87)',
            borderRight: 'none',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  )
}

export default React.memo(AppSidebar)
