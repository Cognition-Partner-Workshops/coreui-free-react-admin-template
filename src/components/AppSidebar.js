import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { AppSidebarNav } from './AppSidebarNav'
import navigation from '../_nav'

const AppSidebar = ({ drawerWidth }) => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const sidebarUnfoldable = useSelector((state) => state.sidebarUnfoldable)

  const handleDrawerClose = () => {
    dispatch({ type: 'set', sidebarShow: false })
  }

  const handleDrawerToggle = () => {
    dispatch({ type: 'set', sidebarShow: !sidebarShow })
  }

  const toggleUnfoldable = () => {
    dispatch({ type: 'set', sidebarUnfoldable: !sidebarUnfoldable })
  }

  const currentWidth = sidebarUnfoldable ? 64 : drawerWidth

  const drawerContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: [1],
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        {!sidebarUnfoldable && (
          <Typography variant="h6" noWrap component="div" sx={{ color: 'white', fontWeight: 600 }}>
            MUI Admin
          </Typography>
        )}
        <IconButton onClick={handleDrawerClose} sx={{ color: 'white', display: { sm: 'none' } }}>
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <AppSidebarNav items={navigation} collapsed={sidebarUnfoldable} />
      <Box
        sx={{
          mt: 'auto',
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'flex-end',
          p: 1,
        }}
      >
        <IconButton onClick={toggleUnfoldable} sx={{ color: 'white' }}>
          {sidebarUnfoldable ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Box>
    </Box>
  )

  return (
    <Box component="nav" sx={{ width: { sm: currentWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="temporary"
        open={sidebarShow}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: '#3c4b64',
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
            width: currentWidth,
            backgroundColor: '#3c4b64',
            transition: 'width 0.2s ease-in-out',
            overflowX: 'hidden',
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
  drawerWidth: PropTypes.number.isRequired,
}

export default React.memo(AppSidebar)
