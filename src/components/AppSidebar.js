import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import CloseIcon from '@mui/icons-material/Close'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

import { AppSidebarNav } from './AppSidebarNav'

import navigation from '../_nav'

const drawerWidth = 256

const AppSidebar = () => {
  const muiTheme = useTheme()
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('lg'))
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const handleClose = () => {
    dispatch({ type: 'set', sidebarShow: false })
  }

  const toggleUnfoldable = () => {
    dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })
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
          borderColor: 'rgba(255,255,255,0.1)',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            display: unfoldable ? 'none' : 'block',
          }}
        >
          CoreUI
        </Typography>
        {isMobile && (
          <IconButton onClick={handleClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>
      <AppSidebarNav items={navigation} />
      {!isMobile && (
        <Box
          sx={{
            borderTop: 1,
            borderColor: 'rgba(255,255,255,0.1)',
            p: 1,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <IconButton onClick={toggleUnfoldable} sx={{ color: 'white' }}>
            {unfoldable ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
      )}
    </>
  )

  return (
    <>
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={sidebarShow}
          onClose={handleClose}
          ModalProps={{ keepMounted: true }}
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#3c4b64',
              color: 'white',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        <Drawer
          variant="persistent"
          open={sidebarShow}
          sx={{
            width: sidebarShow ? (unfoldable ? 64 : drawerWidth) : 0,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: unfoldable ? 64 : drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#3c4b64',
              color: 'white',
              transition: 'width 0.3s ease',
              overflowX: 'hidden',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  )
}

export default React.memo(AppSidebar)
