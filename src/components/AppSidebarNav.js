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

  const renderNavItem = (item, index, nested = false) => {
    const { name, to, href, icon: Icon, badge } = item

    if (href) {
      return (
        <ListItem key={index} disablePadding>
          <ListItemButton
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ pl: nested ? 4 : 2 }}
          >
            {Icon && (
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Icon fontSize="small" />
              </ListItemIcon>
            )}
            {nested && !Icon && (
              <ListItemIcon sx={{ minWidth: 40 }}>
                <FiberManualRecordIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
            )}
            <ListItemText primary={name} />
            {badge && (
              <Chip
                label={badge.text}
                size="small"
                color={
                  badge.color === 'info' ? 'info' : badge.color === 'danger' ? 'error' : 'default'
                }
              />
            )}
          </ListItemButton>
        </ListItem>
      )
    }

    return (
      <ListItem key={index} disablePadding>
        <ListItemButton
          component={NavLink}
          to={to}
          selected={isActive(to)}
          sx={{ pl: nested ? 4 : 2 }}
        >
          {Icon && (
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Icon fontSize="small" />
            </ListItemIcon>
          )}
          {nested && !Icon && (
            <ListItemIcon sx={{ minWidth: 40 }}>
              <FiberManualRecordIcon sx={{ fontSize: 8 }} />
            </ListItemIcon>
          )}
          <ListItemText primary={name} />
          {badge && (
            <Chip
              label={badge.text}
              size="small"
              color={
                badge.color === 'info' ? 'info' : badge.color === 'danger' ? 'error' : 'default'
              }
            />
          )}
        </ListItemButton>
      </ListItem>
    )
  }

  const renderNavGroup = (item, index) => {
    const { name, icon: Icon, items: subItems } = item
    const isOpen = openGroups[name] || false

    return (
      <React.Fragment key={index}>
        <ListItem disablePadding>
          <ListItemButton onClick={() => handleGroupClick(name)}>
            {Icon && (
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Icon fontSize="small" />
              </ListItemIcon>
            )}
            <ListItemText primary={name} />
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subItems?.map((subItem, subIndex) => renderNavItem(subItem, subIndex, true))}
          </List>
        </Collapse>
      </React.Fragment>
    )
  }

  const renderNavTitle = (item, index) => {
    return (
      <Box key={index} sx={{ px: 2, py: 1.5, mt: index > 0 ? 1 : 0 }}>
        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ fontWeight: 'bold', fontSize: '0.7rem' }}
        >
          {item.name}
        </Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ overflow: 'auto', flexGrow: 1 }}>
      <List component="nav" sx={{ py: 0 }}>
        {items &&
          items.map((item, index) => {
            if (item.type === 'title') {
              return renderNavTitle(item, index)
            }
            if (item.type === 'group') {
              return renderNavGroup(item, index)
            }
            return renderNavItem(item, index)
          })}
      </List>
    </Box>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
