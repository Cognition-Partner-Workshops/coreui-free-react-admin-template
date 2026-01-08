import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import Collapse from '@mui/material/Collapse'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

export const AppSidebarNav = ({ items }) => {
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

  const renderBadge = (badge) => {
    if (!badge) return null
    const colorMap = {
      info: 'info',
      danger: 'error',
      success: 'success',
      warning: 'warning',
      primary: 'primary',
      secondary: 'secondary',
    }
    return (
      <Chip
        label={badge.text}
        size="small"
        color={colorMap[badge.color] || 'default'}
        sx={{ ml: 1, height: 20, fontSize: '0.7rem' }}
      />
    )
  }

  const renderNavItem = (item, index, indent = false) => {
    const { name, badge, icon, to, href } = item

    if (href) {
      return (
        <ListItem key={index} disablePadding>
          <ListItemButton
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              pl: indent ? 4 : 2,
              color: 'rgba(255, 255, 255, 0.87)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.7)', minWidth: 40 }}>
              {icon || (indent && <FiberManualRecordIcon sx={{ fontSize: 8 }} />)}
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {typeof name === 'string' ? name : name}
                  {renderBadge(badge)}
                </Box>
              }
              primaryTypographyProps={{ fontSize: '0.875rem' }}
            />
          </ListItemButton>
        </ListItem>
      )
    }

    return (
      <ListItem key={index} disablePadding>
        <ListItemButton
          component={NavLink}
          to={to}
          sx={{
            pl: indent ? 4 : 2,
            color: 'rgba(255, 255, 255, 0.87)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            },
            '&.active': {
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.7)', minWidth: 40 }}>
            {icon || (indent && <FiberManualRecordIcon sx={{ fontSize: 8 }} />)}
          </ListItemIcon>
          <ListItemText
            primary={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {typeof name === 'string' ? name : name}
                {renderBadge(badge)}
              </Box>
            }
            primaryTypographyProps={{ fontSize: '0.875rem' }}
          />
        </ListItemButton>
      </ListItem>
    )
  }

  const renderNavGroup = (item, index) => {
    const { name, icon, items: subItems, to } = item
    const isOpen = openGroups[name] || (to && isActive(to))

    return (
      <React.Fragment key={index}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleGroupClick(name)}
            sx={{
              color: 'rgba(255, 255, 255, 0.87)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.7)', minWidth: 40 }}>
              {icon}
            </ListItemIcon>
            <ListItemText primary={name} primaryTypographyProps={{ fontSize: '0.875rem' }} />
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subItems?.map((subItem, subIndex) =>
              subItem.items
                ? renderNavGroup(subItem, subIndex)
                : renderNavItem(subItem, subIndex, true),
            )}
          </List>
        </Collapse>
      </React.Fragment>
    )
  }

  const renderNavTitle = (item, index) => {
    return (
      <ListSubheader
        key={index}
        sx={{
          backgroundColor: 'transparent',
          color: 'rgba(255, 255, 255, 0.5)',
          fontSize: '0.75rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          lineHeight: '40px',
        }}
      >
        {item.name}
      </ListSubheader>
    )
  }

  const renderItem = (item, index) => {
    if (item.type === 'title') {
      return renderNavTitle(item, index)
    }
    if (item.type === 'group' || item.items) {
      return renderNavGroup(item, index)
    }
    return renderNavItem(item, index)
  }

  return (
    <List
      sx={{
        width: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        flex: 1,
      }}
      component="nav"
    >
      {items && items.map((item, index) => renderItem(item, index))}
    </List>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
