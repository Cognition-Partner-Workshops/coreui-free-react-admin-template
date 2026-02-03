import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import { AppSidebarNav } from './AppSidebarNav'

import navigation from '../_nav'

const AppSidebar = ({ drawerWidth }) => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const handleDrawerClose = () => {
    dispatch({ type: 'set', sidebarShow: false })
  }

  const handleToggleUnfoldable = () => {
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
          minHeight: 64,
        }}
      >
        <Typography variant="h6" noWrap component="div" sx={{ color: 'inherit' }}>
          CoreUI
        </Typography>
        <IconButton onClick={handleDrawerClose} sx={{ color: 'inherit', display: { sm: 'none' } }}>
          <ChevronLeftIcon />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />
      <AppSidebarNav items={navigation} />
      <Box sx={{ flexGrow: 1 }} />
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={handleToggleUnfoldable} sx={{ color: 'inherit' }}>
          {unfoldable ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Box>
    </>
  )

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="temporary"
        open={sidebarShow}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            bgcolor: '#3c4b64',
            color: 'rgba(255, 255, 255, 0.87)',
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            bgcolor: '#3c4b64',
            color: 'rgba(255, 255, 255, 0.87)',
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  )
}

AppSidebar.propTypes = {
  drawerWidth: PropTypes.number,
}

export default React.memo(AppSidebar)
