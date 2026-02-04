import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
  Badge,
  Divider,
  ListItemIcon,
  useTheme,
  alpha,
  Fade,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MailIcon from '@mui/icons-material/Mail'
import ListIcon from '@mui/icons-material/List'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import ContrastIcon from '@mui/icons-material/Contrast'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import PaymentIcon from '@mui/icons-material/Payment'
import AssignmentIcon from '@mui/icons-material/Assignment'
import LogoutIcon from '@mui/icons-material/Logout'
import LockIcon from '@mui/icons-material/Lock'

import AppBreadcrumb from './AppBreadcrumb'
import { drawerWidth, collapsedDrawerWidth } from '../theme'

const AppHeader = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const sidebarUnfoldable = useSelector((state) => state.sidebarUnfoldable)
  const currentTheme = useSelector((state) => state.theme)

  const [themeAnchorEl, setThemeAnchorEl] = React.useState(null)
  const [profileAnchorEl, setProfileAnchorEl] = React.useState(null)

  const currentDrawerWidth = sidebarUnfoldable ? collapsedDrawerWidth : drawerWidth

  const handleThemeMenuOpen = (event) => {
    setThemeAnchorEl(event.currentTarget)
  }

  const handleThemeMenuClose = () => {
    setThemeAnchorEl(null)
  }

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget)
  }

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null)
  }

  const handleThemeChange = (newTheme) => {
    dispatch({ type: 'set', theme: newTheme })
    handleThemeMenuClose()
  }

  const toggleSidebar = () => {
    dispatch({ type: 'set', sidebarShow: !sidebarShow })
  }

  const getThemeIcon = () => {
    switch (currentTheme) {
      case 'dark':
        return <DarkModeIcon />
      case 'auto':
        return <ContrastIcon />
      default:
        return <LightModeIcon />
    }
  }

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
        borderBottom: 1,
        borderColor: 'divider',
        width: { lg: `calc(100% - ${currentDrawerWidth}px)` },
        ml: { lg: `${currentDrawerWidth}px` },
        transition: theme.transitions.create(['width', 'margin'], {
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
    >
      <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }}>
        <IconButton
          color="inherit"
          aria-label="toggle sidebar"
          edge="start"
          onClick={toggleSidebar}
          sx={{
            mr: 2,
            transition: theme.transitions.create('transform'),
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.main, 0.08),
            },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Button
            component={NavLink}
            to="/dashboard"
            color="inherit"
            sx={{
              textTransform: 'none',
              '&.active': {
                color: 'primary.main',
              },
            }}
          >
            Dashboard
          </Button>
          <Button color="inherit" sx={{ textTransform: 'none' }}>
            Users
          </Button>
          <Button color="inherit" sx={{ textTransform: 'none' }}>
            Settings
          </Button>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Tooltip
            title="Notifications"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 300 }}
          >
            <IconButton
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                },
              }}
            >
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Tasks" TransitionComponent={Fade} TransitionProps={{ timeout: 300 }}>
            <IconButton
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                },
              }}
            >
              <ListIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Messages" TransitionComponent={Fade} TransitionProps={{ timeout: 300 }}>
            <IconButton
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                },
              }}
            >
              <Badge badgeContent={2} color="primary">
                <MailIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Divider orientation="vertical" flexItem sx={{ mx: 1, my: 1 }} />

          <Tooltip title="Theme" TransitionComponent={Fade} TransitionProps={{ timeout: 300 }}>
            <IconButton
              color="inherit"
              onClick={handleThemeMenuOpen}
              sx={{
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                },
              }}
            >
              {getThemeIcon()}
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={themeAnchorEl}
            open={Boolean(themeAnchorEl)}
            onClose={handleThemeMenuClose}
            TransitionComponent={Fade}
            PaperProps={{
              elevation: 3,
              sx: {
                minWidth: 150,
                mt: 1,
              },
            }}
          >
            <MenuItem
              onClick={() => handleThemeChange('light')}
              selected={currentTheme === 'light'}
            >
              <ListItemIcon>
                <LightModeIcon fontSize="small" />
              </ListItemIcon>
              Light
            </MenuItem>
            <MenuItem onClick={() => handleThemeChange('dark')} selected={currentTheme === 'dark'}>
              <ListItemIcon>
                <DarkModeIcon fontSize="small" />
              </ListItemIcon>
              Dark
            </MenuItem>
          </Menu>

          <Divider orientation="vertical" flexItem sx={{ mx: 1, my: 1 }} />

          <Tooltip title="Account" TransitionComponent={Fade} TransitionProps={{ timeout: 300 }}>
            <IconButton
              onClick={handleProfileMenuOpen}
              sx={{
                p: 0.5,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                },
              }}
            >
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: 'primary.main',
                  fontSize: 14,
                }}
              >
                A
              </Avatar>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={profileAnchorEl}
            open={Boolean(profileAnchorEl)}
            onClose={handleProfileMenuClose}
            TransitionComponent={Fade}
            PaperProps={{
              elevation: 3,
              sx: {
                minWidth: 200,
                mt: 1,
              },
            }}
          >
            <Box sx={{ px: 2, py: 1.5 }}>
              <Typography variant="subtitle2" fontWeight={600}>
                Admin User
              </Typography>
              <Typography variant="body2" color="text.secondary">
                admin@example.com
              </Typography>
            </Box>
            <Divider />
            <MenuItem onClick={handleProfileMenuClose}>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>
              <ListItemIcon>
                <PaymentIcon fontSize="small" />
              </ListItemIcon>
              Payments
            </MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>
              <ListItemIcon>
                <AssignmentIcon fontSize="small" />
              </ListItemIcon>
              Projects
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleProfileMenuClose}>
              <ListItemIcon>
                <LockIcon fontSize="small" />
              </ListItemIcon>
              Lock Account
            </MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>

      <Box
        sx={{
          px: 3,
          py: 1,
          borderTop: 1,
          borderColor: 'divider',
          backgroundColor: alpha(theme.palette.background.default, 0.5),
        }}
      >
        <AppBreadcrumb />
      </Box>
    </AppBar>
  )
}

export default AppHeader
