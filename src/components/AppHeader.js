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
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Badge from '@mui/material/Badge'
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
  const [themeAnchorEl, setThemeAnchorEl] = useState(null)
  const themeMenuOpen = Boolean(themeAnchorEl)

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const currentTheme = useSelector((state) => state.theme)

  const handleThemeMenuClick = (event) => {
    setThemeAnchorEl(event.currentTarget)
  }

  const handleThemeMenuClose = () => {
    setThemeAnchorEl(null)
  }

  const handleThemeChange = (theme) => {
    dispatch({ type: 'set', theme })
    handleThemeMenuClose()
  }

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={1}
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgcolor: 'background.paper',
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="toggle drawer"
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

          <IconButton color="inherit" onClick={handleThemeMenuClick}>
            {currentTheme === 'dark' ? (
              <DarkModeIcon />
            ) : currentTheme === 'auto' ? (
              <ContrastIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>
          <Menu
            anchorEl={themeAnchorEl}
            open={themeMenuOpen}
            onClose={handleThemeMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem
              onClick={() => handleThemeChange('light')}
              selected={currentTheme === 'light'}
            >
              <LightModeIcon sx={{ mr: 1 }} /> Light
            </MenuItem>
            <MenuItem onClick={() => handleThemeChange('dark')} selected={currentTheme === 'dark'}>
              <DarkModeIcon sx={{ mr: 1 }} /> Dark
            </MenuItem>
            <MenuItem onClick={() => handleThemeChange('auto')} selected={currentTheme === 'auto'}>
              <ContrastIcon sx={{ mr: 1 }} /> Auto
            </MenuItem>
          </Menu>

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          <AppHeaderDropdown />
        </Box>
      </Toolbar>
      <Toolbar variant="dense" sx={{ borderTop: 1, borderColor: 'divider', minHeight: 40 }}>
        <AppBreadcrumb />
      </Toolbar>
    </AppBar>
  )
}

AppHeader.propTypes = {
  drawerWidth: PropTypes.number,
}

AppHeader.defaultProps = {
  drawerWidth: 256,
}

export default AppHeader
