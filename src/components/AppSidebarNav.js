import React from 'react'
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
  const [openGroups, setOpenGroups] = React.useState({})

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

  const renderNavItem = (item, index, indent = false) => {
    const { name, to, href, icon, badge } = item

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
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.7)', minWidth: 40 }}>
              {icon || (indent && <FiberManualRecordIcon sx={{ fontSize: 8 }} />)}
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.87)' }}>
                    {typeof name === 'string' ? name : name}
                  </Typography>
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
          to={to}
          sx={{
            pl: indent ? 4 : 2,
            bgcolor: isActive(to) ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.7)', minWidth: 40 }}>
            {icon || (indent && <FiberManualRecordIcon sx={{ fontSize: 8 }} />)}
          </ListItemIcon>
          <ListItemText
            primary={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.87)' }}>
                  {name}
                </Typography>
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
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.7)', minWidth: 40 }}>
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.87)' }}>
                  {name}
                </Typography>
              }
            />
            {isOpen ? (
              <ExpandLess sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
            ) : (
              <ExpandMore sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
            )}
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
      <ListItem key={index} sx={{ pt: 2, pb: 1 }}>
        <Typography
          variant="caption"
          sx={{
            color: 'rgba(255, 255, 255, 0.5)',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            letterSpacing: 1,
          }}
        >
          {item.name}
        </Typography>
      </ListItem>
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
        overflowY: 'auto',
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
