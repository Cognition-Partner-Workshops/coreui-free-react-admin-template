import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Divider from '@mui/material/Divider'
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

const AppHeader = ({ drawerWidth }) => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const sidebarUnfoldable = useSelector((state) => state.sidebarUnfoldable)
  const theme = useSelector((state) => state.theme)

  const [themeAnchorEl, setThemeAnchorEl] = useState(null)
  const themeMenuOpen = Boolean(themeAnchorEl)

  const handleDrawerToggle = () => {
    dispatch({ type: 'set', sidebarShow: !sidebarShow })
  }

  const handleThemeMenuOpen = (event) => {
    setThemeAnchorEl(event.currentTarget)
  }

  const handleThemeMenuClose = () => {
    setThemeAnchorEl(null)
  }

  const handleThemeChange = (newTheme) => {
    dispatch({ type: 'set', theme: newTheme })
    handleThemeMenuClose()
  }

  const getThemeIcon = () => {
    switch (theme) {
      case 'dark':
        return <DarkModeIcon />
      case 'auto':
        return <ContrastIcon />
      default:
        return <LightModeIcon />
    }
  }

  const currentWidth = sidebarUnfoldable ? 64 : drawerWidth

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        width: { sm: `calc(100% - ${currentWidth}px)` },
        ml: { sm: `${currentWidth}px` },
        transition: 'width 0.2s ease-in-out, margin 0.2s ease-in-out',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Typography
            component={NavLink}
            to="/dashboard"
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': { opacity: 0.8 },
            }}
          >
            Dashboard
          </Typography>
          <Typography
            component="a"
            href="#"
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': { opacity: 0.8 },
            }}
          >
            Users
          </Typography>
          <Typography
            component="a"
            href="#"
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': { opacity: 0.8 },
            }}
          >
            Settings
          </Typography>
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
            {getThemeIcon()}
          </IconButton>
          <Menu
            anchorEl={themeAnchorEl}
            open={themeMenuOpen}
            onClose={handleThemeMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={() => handleThemeChange('light')} selected={theme === 'light'}>
              <ListItemIcon>
                <LightModeIcon fontSize="small" />
              </ListItemIcon>
              Light
            </MenuItem>
            <MenuItem onClick={() => handleThemeChange('dark')} selected={theme === 'dark'}>
              <ListItemIcon>
                <DarkModeIcon fontSize="small" />
              </ListItemIcon>
              Dark
            </MenuItem>
            <MenuItem onClick={() => handleThemeChange('auto')} selected={theme === 'auto'}>
              <ListItemIcon>
                <ContrastIcon fontSize="small" />
              </ListItemIcon>
              Auto
            </MenuItem>
          </Menu>

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          <AppHeaderDropdown />
        </Box>
      </Toolbar>
      <Toolbar variant="dense" sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
        <AppBreadcrumb />
      </Toolbar>
    </AppBar>
  )
}

AppHeader.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
}

export default AppHeader
