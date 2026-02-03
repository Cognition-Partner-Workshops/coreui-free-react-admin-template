import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

export const AppSidebarNav = ({ items, collapsed }) => {
  const location = useLocation()
  const [openGroups, setOpenGroups] = useState({})

  const handleGroupClick = (name) => {
    setOpenGroups((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  const isActive = (to) => {
    return location.pathname === to || location.pathname.startsWith(to + '/')
  }

  const getBadgeColor = (color) => {
    const colorMap = {
      info: 'info',
      error: 'error',
      warning: 'warning',
      success: 'success',
      primary: 'primary',
      secondary: 'secondary',
    }
    return colorMap[color] || 'default'
  }

  const renderNavItem = (item, index, indent = false) => {
    const { name, to, href, icon, badge } = item

    const content = (
      <ListItemButton
        component={to ? NavLink : 'a'}
        to={to}
        href={href}
        target={href ? '_blank' : undefined}
        rel={href ? 'noopener noreferrer' : undefined}
        sx={{
          minHeight: 48,
          justifyContent: collapsed ? 'center' : 'initial',
          px: 2.5,
          pl: indent && !collapsed ? 4 : 2.5,
          backgroundColor: to && isActive(to) ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
          },
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: collapsed ? 'auto' : 3,
            justifyContent: 'center',
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          {icon || (indent && <FiberManualRecordIcon sx={{ fontSize: 8 }} />)}
        </ListItemIcon>
        {!collapsed && (
          <>
            <ListItemText
              primary={name}
              sx={{
                '& .MuiListItemText-primary': {
                  color: 'rgba(255, 255, 255, 0.87)',
                  fontSize: '0.875rem',
                },
              }}
            />
            {badge && (
              <Chip
                label={badge.text}
                color={getBadgeColor(badge.color)}
                size="small"
                sx={{ height: 20, fontSize: '0.7rem' }}
              />
            )}
          </>
        )}
      </ListItemButton>
    )

    return (
      <ListItem key={index} disablePadding sx={{ display: 'block' }}>
        {content}
      </ListItem>
    )
  }

  const renderNavGroup = (item, index) => {
    const { name, icon, items: subItems } = item
    const isOpen = openGroups[name] || false

    return (
      <React.Fragment key={index}>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            onClick={() => handleGroupClick(name)}
            sx={{
              minHeight: 48,
              justifyContent: collapsed ? 'center' : 'initial',
              px: 2.5,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: collapsed ? 'auto' : 3,
                justifyContent: 'center',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              {icon}
            </ListItemIcon>
            {!collapsed && (
              <>
                <ListItemText
                  primary={name}
                  sx={{
                    '& .MuiListItemText-primary': {
                      color: 'rgba(255, 255, 255, 0.87)',
                      fontSize: '0.875rem',
                    },
                  }}
                />
                {isOpen ? (
                  <ExpandLess sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                ) : (
                  <ExpandMore sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                )}
              </>
            )}
          </ListItemButton>
        </ListItem>
        {!collapsed && (
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {subItems?.map((subItem, subIndex) => renderNavItem(subItem, subIndex, true))}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    )
  }

  const renderNavTitle = (item, index) => {
    if (collapsed) return null
    return (
      <Box key={index} sx={{ px: 2.5, py: 1.5, mt: 1 }}>
        <Typography
          variant="overline"
          sx={{
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
          }}
        >
          {item.name}
        </Typography>
      </Box>
    )
  }

  const renderItem = (item, index) => {
    switch (item.type) {
      case 'title':
        return renderNavTitle(item, index)
      case 'group':
        return renderNavGroup(item, index)
      case 'item':
      default:
        return renderNavItem(item, index)
    }
  }

  return (
    <List sx={{ flexGrow: 1, overflowY: 'auto', overflowX: 'hidden' }}>
      {items && items.map((item, index) => renderItem(item, index))}
    </List>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  collapsed: PropTypes.bool,
}

AppSidebarNav.defaultProps = {
  collapsed: false,
}
