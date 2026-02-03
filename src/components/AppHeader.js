import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
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
import ListItemIcon from '@mui/material/ListItemIcon'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MailIcon from '@mui/icons-material/Mail'
import ListIcon from '@mui/icons-material/List'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import ContrastIcon from '@mui/icons-material/Contrast'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'

const drawerWidth = 256

const AppHeader = () => {
  const headerRef = useRef()
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

  const setColorMode = (mode) => {
    dispatch({ type: 'set', theme: mode })
    handleThemeClose()
  }

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (document.documentElement.scrollTop > 0) {
          headerRef.current.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'
        } else {
          headerRef.current.style.boxShadow = 'none'
        }
      }
    }

    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AppBar
      position="sticky"
      ref={headerRef}
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
        boxShadow: 'none',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
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
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <ListIcon />
          </IconButton>
          <IconButton color="inherit">
            <MailIcon />
          </IconButton>

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          <IconButton color="inherit" onClick={handleThemeClick}>
            {theme === 'dark' ? (
              <DarkModeIcon />
            ) : theme === 'auto' ? (
              <ContrastIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>
          <Menu
            anchorEl={themeAnchorEl}
            open={themeMenuOpen}
            onClose={handleThemeClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={() => setColorMode('light')} selected={theme === 'light'}>
              <ListItemIcon>
                <LightModeIcon fontSize="small" />
              </ListItemIcon>
              Light
            </MenuItem>
            <MenuItem onClick={() => setColorMode('dark')} selected={theme === 'dark'}>
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
