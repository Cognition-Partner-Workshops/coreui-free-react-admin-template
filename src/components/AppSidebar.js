import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  Chip,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
  Fade,
  alpha,
} from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

import navigation from '../_nav'
import { drawerWidth, collapsedDrawerWidth } from '../theme'

const NavItem = ({ item, depth = 0, collapsed }) => {
  const location = useLocation()
  const theme = useTheme()
  const isActive = item.to && location.pathname === item.to

  const handleClick = () => {
    if (item.href) {
      window.open(item.href, '_blank', 'noopener,noreferrer')
    }
  }

  const content = (
    <ListItemButton
      component={item.to ? NavLink : 'div'}
      to={item.to}
      onClick={item.href ? handleClick : undefined}
      selected={isActive}
      sx={{
        pl: collapsed ? 2 : 2 + depth * 2,
        py: 1,
        minHeight: 44,
        borderRadius: 1,
        mx: 1,
        mb: 0.5,
        transition: theme.transitions.create(['background-color', 'padding'], {
          duration: theme.transitions.duration.shorter,
        }),
        '&.Mui-selected': {
          backgroundColor: alpha(theme.palette.primary.main, 0.12),
          '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.18),
          },
        },
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, 0.08),
        },
      }}
    >
      {item.icon && (
        <ListItemIcon
          sx={{
            minWidth: collapsed ? 'auto' : 40,
            color: isActive ? 'primary.main' : 'text.secondary',
            transition: theme.transitions.create('color'),
          }}
        >
          <item.icon fontSize="small" />
        </ListItemIcon>
      )}
      {!item.icon && depth > 0 && (
        <ListItemIcon
          sx={{
            minWidth: collapsed ? 'auto' : 40,
            color: isActive ? 'primary.main' : 'text.secondary',
          }}
        >
          <FiberManualRecordIcon sx={{ fontSize: 8 }} />
        </ListItemIcon>
      )}
      <Fade in={!collapsed} timeout={200}>
        <ListItemText
          primary={item.name}
          primaryTypographyProps={{
            fontSize: 14,
            fontWeight: isActive ? 600 : 400,
            color: isActive ? 'primary.main' : 'text.primary',
            noWrap: true,
          }}
          sx={{ display: collapsed ? 'none' : 'block' }}
        />
      </Fade>
      {!collapsed && item.external && (
        <OpenInNewIcon sx={{ fontSize: 14, ml: 1, color: 'text.secondary' }} />
      )}
      {!collapsed && item.badge && (
        <Chip
          label={item.badge.text}
          size="small"
          color={item.badge.color}
          sx={{
            height: 20,
            fontSize: 10,
            fontWeight: 600,
            ml: 1,
          }}
        />
      )}
    </ListItemButton>
  )

  return <ListItem disablePadding>{content}</ListItem>
}

const NavGroup = ({ item, collapsed }) => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const theme = useTheme()

  const isChildActive = item.items?.some(
    (child) =>
      child.to === location.pathname ||
      child.items?.some((grandChild) => grandChild.to === location.pathname),
  )

  const handleToggle = () => {
    if (!collapsed) {
      setOpen(!open)
    }
  }

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          onClick={handleToggle}
          sx={{
            pl: collapsed ? 2 : 2,
            py: 1,
            minHeight: 44,
            borderRadius: 1,
            mx: 1,
            mb: 0.5,
            transition: theme.transitions.create(['background-color', 'padding']),
            backgroundColor: isChildActive
              ? alpha(theme.palette.primary.main, 0.08)
              : 'transparent',
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.main, 0.08),
            },
          }}
        >
          {item.icon && (
            <ListItemIcon
              sx={{
                minWidth: collapsed ? 'auto' : 40,
                color: isChildActive ? 'primary.main' : 'text.secondary',
              }}
            >
              <item.icon fontSize="small" />
            </ListItemIcon>
          )}
          <Fade in={!collapsed} timeout={200}>
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{
                fontSize: 14,
                fontWeight: isChildActive ? 600 : 400,
                color: isChildActive ? 'primary.main' : 'text.primary',
                noWrap: true,
              }}
              sx={{ display: collapsed ? 'none' : 'block' }}
            />
          </Fade>
          {!collapsed && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
      </ListItem>
      <Collapse in={open && !collapsed} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.items?.map((subItem, index) =>
            subItem.items ? (
              <NavGroup key={index} item={subItem} collapsed={collapsed} />
            ) : (
              <NavItem key={index} item={subItem} depth={1} collapsed={collapsed} />
            ),
          )}
        </List>
      </Collapse>
    </>
  )
}

const NavTitle = ({ item, collapsed }) => {
  const theme = useTheme()

  if (collapsed) return null

  return (
    <Fade in={!collapsed} timeout={200}>
      <Typography
        variant="overline"
        sx={{
          px: 3,
          py: 1.5,
          display: 'block',
          color: 'text.secondary',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 1.2,
        }}
      >
        {item.title}
      </Typography>
    </Fade>
  )
}

const AppSidebar = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'))
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const sidebarUnfoldable = useSelector((state) => state.sidebarUnfoldable)

  const collapsed = !isMobile && sidebarUnfoldable
  const currentDrawerWidth = collapsed ? collapsedDrawerWidth : drawerWidth

  const handleClose = () => {
    dispatch({ type: 'set', sidebarShow: false })
  }

  const drawerContent = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'space-between',
          px: 2,
          py: 2,
          minHeight: 64,
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Fade in={!collapsed} timeout={200}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              display: collapsed ? 'none' : 'block',
            }}
          >
            MUI Admin
          </Typography>
        </Fade>
        {isMobile && (
          <IconButton onClick={handleClose} size="small">
            <ChevronLeftIcon />
          </IconButton>
        )}
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          overflow: 'auto',
          py: 1,
          '&::-webkit-scrollbar': {
            width: 6,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: alpha(theme.palette.text.primary, 0.2),
            borderRadius: 3,
          },
        }}
      >
        <List component="nav" disablePadding>
          {navigation.map((item, index) => {
            if (item.title) {
              return <NavTitle key={index} item={item} collapsed={collapsed} />
            }
            if (item.items) {
              return <NavGroup key={index} item={item} collapsed={collapsed} />
            }
            return <NavItem key={index} item={item} collapsed={collapsed} />
          })}
        </List>
      </Box>

      <Divider />
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <IconButton
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !sidebarUnfoldable })}
          sx={{
            display: { xs: 'none', lg: 'flex' },
            transition: theme.transitions.create('transform'),
            transform: collapsed ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      </Box>
    </Box>
  )

  return (
    <Box
      component="nav"
      sx={{
        width: { lg: currentDrawerWidth },
        flexShrink: { lg: 0 },
        transition: theme.transitions.create('width', {
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
    >
      <Drawer
        variant="temporary"
        open={sidebarShow && isMobile}
        onClose={handleClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: 'background.paper',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', lg: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: currentDrawerWidth,
            backgroundColor: 'background.paper',
            borderRight: 1,
            borderColor: 'divider',
            transition: theme.transitions.create('width', {
              duration: theme.transitions.duration.enteringScreen,
            }),
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

export default React.memo(AppSidebar)
