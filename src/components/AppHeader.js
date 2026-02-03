import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Badge from '@mui/material/Badge'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MailIcon from '@mui/icons-material/Mail'
import ListIcon from '@mui/icons-material/List'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import ContrastIcon from '@mui/icons-material/Contrast'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'

const AppHeader = ({ drawerWidth }) => {
  const [colorMode, setColorMode] = useState('light')
  const [anchorEl, setAnchorEl] = useState(null)

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const handleThemeMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleThemeMenuClose = () => {
    setAnchorEl(null)
  }

  const handleThemeChange = (mode) => {
    setColorMode(mode)
    handleThemeMenuClose()
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgcolor: 'background.paper',
        color: 'text.primary',
        boxShadow: 1,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Button component={NavLink} to="/dashboard" color="inherit">
            Dashboard
          </Button>
          <Button color="inherit">Users</Button>
          <Button color="inherit">Settings</Button>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <ListIcon />
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={2} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          <IconButton color="inherit" onClick={handleThemeMenuOpen}>
            {colorMode === 'dark' ? (
              <DarkModeIcon />
            ) : colorMode === 'auto' ? (
              <ContrastIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleThemeMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem selected={colorMode === 'light'} onClick={() => handleThemeChange('light')}>
              <LightModeIcon sx={{ mr: 1 }} /> Light
            </MenuItem>
            <MenuItem selected={colorMode === 'dark'} onClick={() => handleThemeChange('dark')}>
              <DarkModeIcon sx={{ mr: 1 }} /> Dark
            </MenuItem>
            <MenuItem selected={colorMode === 'auto'} onClick={() => handleThemeChange('auto')}>
              <ContrastIcon sx={{ mr: 1 }} /> Auto
            </MenuItem>
          </Menu>

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          <AppHeaderDropdown />
        </Box>
      </Toolbar>
      <Toolbar variant="dense" sx={{ minHeight: 48, bgcolor: 'background.default' }}>
        <AppBreadcrumb />
      </Toolbar>
    </AppBar>
  )
}

AppHeader.propTypes = {
  drawerWidth: PropTypes.number,
}

export default AppHeader
