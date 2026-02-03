import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ListIcon from '@mui/icons-material/List'
import EmailIcon from '@mui/icons-material/Email'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import ContrastIcon from '@mui/icons-material/Contrast'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'

const drawerWidth = 256

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const theme = useSelector((state) => state.theme)

  const [themeAnchorEl, setThemeAnchorEl] = useState(null)
  const themeMenuOpen = Boolean(themeAnchorEl)

  const handleThemeClick = (event) => {
    setThemeAnchorEl(event.currentTarget)
  }

  const handleThemeClose = () => {
    setThemeAnchorEl(null)
  }

  const handleThemeChange = (newTheme) => {
    dispatch({ type: 'set', theme: newTheme })
    handleThemeClose()
  }

  return (
    <AppBar
      position="sticky"
      color="default"
      sx={{
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="toggle sidebar"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          sx={{ mr: 2 }}
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
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <ListIcon />
          </IconButton>
          <IconButton color="inherit">
            <EmailIcon />
          </IconButton>

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          <IconButton color="inherit" onClick={handleThemeClick}>
            {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          <Menu
            anchorEl={themeAnchorEl}
            open={themeMenuOpen}
            onClose={handleThemeClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem selected={theme === 'light'} onClick={() => handleThemeChange('light')}>
              <ListItemIcon>
                <LightModeIcon fontSize="small" />
              </ListItemIcon>
              Light
            </MenuItem>
            <MenuItem selected={theme === 'dark'} onClick={() => handleThemeChange('dark')}>
              <ListItemIcon>
                <DarkModeIcon fontSize="small" />
              </ListItemIcon>
              Dark
            </MenuItem>
          </Menu>

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          <AppHeaderDropdown />
        </Box>
      </Toolbar>
      <Box sx={{ px: 3, py: 1, borderTop: 1, borderColor: 'divider' }}>
        <AppBreadcrumb />
      </Box>
    </AppBar>
  )
}

export default AppHeader
