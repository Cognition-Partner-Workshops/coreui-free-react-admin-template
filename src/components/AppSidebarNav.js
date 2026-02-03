import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
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

const NavItemComponent = ({ item, indent = false }) => {
  const { name, badge, icon, to, href } = item

  const content = (
    <ListItemButton
      component={to ? NavLink : href ? 'a' : 'div'}
      to={to}
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      sx={{
        pl: indent ? 4 : 2,
        color: 'inherit',
        '&.active': {
          bgcolor: 'rgba(255, 255, 255, 0.1)',
        },
        '&:hover': {
          bgcolor: 'rgba(255, 255, 255, 0.08)',
        },
      }}
    >
      <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
        {icon ? icon : indent ? <FiberManualRecordIcon sx={{ fontSize: 8 }} /> : null}
      </ListItemIcon>
      <ListItemText primary={name} primaryTypographyProps={{ fontSize: '0.875rem' }} />
      {badge && (
        <Chip
          label={badge.text}
          size="small"
          color={badge.color === 'info' ? 'info' : badge.color === 'danger' ? 'error' : 'default'}
          sx={{ ml: 1, height: 20, fontSize: '0.7rem' }}
        />
      )}
    </ListItemButton>
  )

  return <ListItem disablePadding>{content}</ListItem>
}

NavItemComponent.propTypes = {
  item: PropTypes.object.isRequired,
  indent: PropTypes.bool,
}

const NavGroupComponent = ({ item }) => {
  const [open, setOpen] = useState(false)
  const { name, icon, items } = item

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          onClick={handleClick}
          sx={{
            color: 'inherit',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.08)',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>{icon}</ListItemIcon>
          <ListItemText primary={name} primaryTypographyProps={{ fontSize: '0.875rem' }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items?.map((subItem, index) =>
            subItem.items ? (
              <NavGroupComponent key={index} item={subItem} />
            ) : (
              <NavItemComponent key={index} item={subItem} indent />
            ),
          )}
        </List>
      </Collapse>
    </>
  )
}

NavGroupComponent.propTypes = {
  item: PropTypes.object.isRequired,
}

const NavTitleComponent = ({ item }) => {
  return (
    <Box sx={{ px: 2, py: 1, mt: 2 }}>
      <Typography
        variant="overline"
        sx={{
          color: 'rgba(255, 255, 255, 0.6)',
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

NavTitleComponent.propTypes = {
  item: PropTypes.object.isRequired,
}

export const AppSidebarNav = ({ items }) => {
  const renderNavItem = (item, index) => {
    if (item.items) {
      return <NavGroupComponent key={index} item={item} />
    }
    if (item.component?.displayName === 'CNavTitle' || item.title) {
      return <NavTitleComponent key={index} item={item} />
    }
    return <NavItemComponent key={index} item={item} />
  }

  return (
    <List
      sx={{
        width: '100%',
        overflow: 'auto',
        flex: 1,
      }}
    >
      {items && items.map((item, index) => renderNavItem(item, index))}
    </List>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
