import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
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
    return location.pathname === to
  }

  const navItem = (item, index, indent = false) => {
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
              color: 'rgba(255,255,255,0.87)',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.08)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'rgba(255,255,255,0.6)', minWidth: 40 }}>
              {icon || (indent && <FiberManualRecordIcon sx={{ fontSize: 8 }} />)}
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {typeof name === 'string' ? name : name}
                  {badge && (
                    <Chip
                      label={badge.text}
                      size="small"
                      color={badge.color === 'danger' ? 'error' : badge.color}
                      sx={{ height: 20, fontSize: '0.7rem' }}
                    />
                  )}
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
            color: 'rgba(255,255,255,0.87)',
            bgcolor: isActive(to) ? 'rgba(255,255,255,0.12)' : 'transparent',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.08)',
            },
            '&.active': {
              bgcolor: 'rgba(255,255,255,0.12)',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'rgba(255,255,255,0.6)', minWidth: 40 }}>
            {icon || (indent && <FiberManualRecordIcon sx={{ fontSize: 8 }} />)}
          </ListItemIcon>
          <ListItemText
            primary={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {name}
                {badge && (
                  <Chip
                    label={badge.text}
                    size="small"
                    color={
                      badge.color === 'danger'
                        ? 'error'
                        : badge.color === 'info'
                          ? 'info'
                          : 'default'
                    }
                    sx={{ height: 20, fontSize: '0.7rem' }}
                  />
                )}
              </Box>
            }
            primaryTypographyProps={{ fontSize: '0.875rem' }}
          />
        </ListItemButton>
      </ListItem>
    )
  }

  const navTitle = (item, index) => {
    return (
      <ListItem key={index} sx={{ pt: 2, pb: 1 }}>
        <Typography
          variant="caption"
          sx={{
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          {item.name}
        </Typography>
      </ListItem>
    )
  }

  const navGroup = (item, index) => {
    const { name, icon, items: subItems } = item
    const isOpen = openGroups[name] || false

    return (
      <React.Fragment key={index}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleGroupClick(name)}
            sx={{
              color: 'rgba(255,255,255,0.87)',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.08)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'rgba(255,255,255,0.6)', minWidth: 40 }}>
              {icon}
            </ListItemIcon>
            <ListItemText primary={name} primaryTypographyProps={{ fontSize: '0.875rem' }} />
            {isOpen ? (
              <ExpandLess sx={{ color: 'rgba(255,255,255,0.6)' }} />
            ) : (
              <ExpandMore sx={{ color: 'rgba(255,255,255,0.6)' }} />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subItems?.map((subItem, subIndex) =>
              subItem.items ? navGroup(subItem, subIndex) : navItem(subItem, subIndex, true),
            )}
          </List>
        </Collapse>
      </React.Fragment>
    )
  }

  const renderNavItem = (item, index) => {
    if (item.items) {
      return navGroup(item, index)
    }
    if (
      item.component?.name === 'CNavTitle' ||
      (item.name && !item.to && !item.href && !item.items)
    ) {
      return navTitle(item, index)
    }
    return navItem(item, index)
  }

  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'transparent',
        overflow: 'auto',
        flex: 1,
      }}
      component="nav"
    >
      {items && items.map((item, index) => renderNavItem(item, index))}
    </List>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
