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
        color={colorMap[badge.color] || 'default'}
        size="small"
        sx={{ ml: 1, height: 20, fontSize: '0.7rem' }}
      />
    )
  }

  const renderNavTitle = (item, index) => {
    return (
      <Typography
        key={index}
        variant="overline"
        sx={{
          px: 2,
          pt: 2,
          pb: 1,
          display: 'block',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.75rem',
          fontWeight: 600,
        }}
      >
        {item.name}
      </Typography>
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
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
              {icon || (indent && <FiberManualRecordIcon sx={{ fontSize: 8 }} />)}
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {typeof name === 'string' ? name : name}
                  {renderBadge(badge)}
                </Box>
              }
            />
          </ListItemButton>
        </ListItem>
      )
    }

    return (
      <ListItem key={index} disablePadding>
        <ListItemButton
          component={NavLink}
          to={to || '/'}
          sx={{
            pl: indent ? 4 : 2,
            color: 'rgba(255, 255, 255, 0.87)',
            backgroundColor: isActive(to) ? 'rgba(255, 255, 255, 0.16)' : 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            },
            '&.active': {
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
            {icon || (indent && <FiberManualRecordIcon sx={{ fontSize: 8 }} />)}
          </ListItemIcon>
          <ListItemText
            primary={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {name}
                {renderBadge(badge)}
              </Box>
            }
          />
        </ListItemButton>
      </ListItem>
    )
  }

  const renderNavGroup = (item, index) => {
    const { name, icon, items: subItems } = item
    const isOpen = openGroups[name] || false

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
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>{icon}</ListItemIcon>
            <ListItemText primary={name} />
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

  const renderItem = (item, index) => {
    if (item.component?.name === 'CNavTitle' || item.component?.displayName === 'CNavTitle') {
      return renderNavTitle(item, index)
    }
    if (item.items) {
      return renderNavGroup(item, index)
    }
    return renderNavItem(item, index)
  }

  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'transparent',
        overflow: 'auto',
        flex: 1,
      }}
    >
      {items && items.map((item, index) => renderItem(item, index))}
    </List>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
