import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Badge from '@mui/material/Badge'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
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
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const currentTheme = useSelector((state) => state.theme)

  const [themeAnchorEl, setThemeAnchorEl] = useState(null)
  const themeMenuOpen = Boolean(themeAnchorEl)

  const handleThemeMenuOpen = (event) => {
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
      sx={{
        width: { sm: `calc(100% - ${sidebarShow ? drawerWidth : 0}px)` },
        ml: { sm: `${sidebarShow ? drawerWidth : 0}px` },
        boxShadow: 1,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Button color="inherit" component={NavLink} to="/dashboard">
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
              <ListItemIcon>
                <LightModeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Light</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => handleThemeChange('dark')} selected={currentTheme === 'dark'}>
              <ListItemIcon>
                <DarkModeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Dark</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => handleThemeChange('auto')} selected={currentTheme === 'auto'}>
              <ListItemIcon>
                <ContrastIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Auto</ListItemText>
            </MenuItem>
          </Menu>

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          <AppHeaderDropdown />
        </Box>
      </Toolbar>
      <Toolbar variant="dense" sx={{ minHeight: 48 }}>
        <AppBreadcrumb />
      </Toolbar>
    </AppBar>
  )
}

AppHeader.propTypes = {
  drawerWidth: PropTypes.number,
}

export default AppHeader
