import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import CloseIcon from '@mui/icons-material/Close'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

import { AppSidebarNav } from './AppSidebarNav'
import navigation from '../_nav'

const drawerWidth = 256

const AppSidebar = () => {
  const muiTheme = useTheme()
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'))
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const handleClose = () => {
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
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 'bold',
          }}
        >
          CoreUI React
        </Typography>
        {isMobile && (
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        )}
      </Box>
      <AppSidebarNav items={navigation} />
      <Box
        sx={{
          borderTop: 1,
          borderColor: 'divider',
          p: 1,
          display: { xs: 'none', lg: 'flex' },
          justifyContent: 'flex-end',
        }}
      >
        <IconButton onClick={handleClose} size="small">
          <ChevronLeftIcon />
        </IconButton>
      </Box>
    </>
  )

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'persistent'}
      open={sidebarShow}
      onClose={handleClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: 'background.paper',
        },
      }}
    >
      {drawerContent}
    </Drawer>
  )
}

export default React.memo(AppSidebar)
