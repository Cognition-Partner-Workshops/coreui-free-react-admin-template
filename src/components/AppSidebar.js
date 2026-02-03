import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import CloseIcon from '@mui/icons-material/Close'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import { AppSidebarNav } from './AppSidebarNav'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = ({ drawerWidth = 256 }) => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

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
        <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold' }}>
          CoreUI MUI
        </Typography>
        <IconButton onClick={handleDrawerClose} sx={{ display: { sm: 'none' } }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <AppSidebarNav items={navigation} />
    </>
  )

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="navigation"
    >
      {/* Mobile drawer */}
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
            bgcolor: 'grey.900',
            color: 'common.white',
          },
        }}
      >
        {drawerContent}
      </Drawer>
      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            bgcolor: 'grey.900',
            color: 'common.white',
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
