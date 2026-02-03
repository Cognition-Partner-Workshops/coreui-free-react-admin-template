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

const NavItemComponent = ({ item, indent = false }) => {
  const location = useLocation()
  const { name, badge, icon, to, href } = item
  const isActive = to && location.pathname === to

  const content = (
    <ListItemButton
      component={to ? NavLink : href ? 'a' : 'div'}
      to={to}
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      sx={{
        pl: indent ? 4 : 2,
        py: 1,
        color: 'rgba(255,255,255,0.8)',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.1)',
        },
        '&.active': {
          backgroundColor: 'rgba(255,255,255,0.15)',
          color: 'white',
        },
        ...(isActive && {
          backgroundColor: 'rgba(255,255,255,0.15)',
          color: 'white',
        }),
      }}
    >
      <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
        {icon ? icon : indent ? <FiberManualRecordIcon sx={{ fontSize: 8 }} /> : null}
      </ListItemIcon>
      <ListItemText
        primary={name}
        primaryTypographyProps={{
          fontSize: '0.875rem',
          fontWeight: isActive ? 500 : 400,
        }}
      />
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
            py: 1,
            color: 'rgba(255,255,255,0.8)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
          }}
        >
          <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>{icon}</ListItemIcon>
          <ListItemText
            primary={name}
            primaryTypographyProps={{
              fontSize: '0.875rem',
            }}
          />
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

const NavTitleComponent = ({ item }) => {
  return (
    <Box sx={{ px: 2, py: 1.5, mt: 1 }}>
      <Typography
        variant="overline"
        sx={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: 1,
        }}
      >
        {item.name}
      </Typography>
    </Box>
  )
}

export const AppSidebarNav = ({ items }) => {
  return (
    <Box sx={{ overflow: 'auto', flexGrow: 1 }}>
      <List>
        {items &&
          items.map((item, index) => {
            if (item.type === 'title') {
              return <NavTitleComponent key={index} item={item} />
            }
            if (item.type === 'group' || item.items) {
              return <NavGroupComponent key={index} item={item} />
            }
            return <NavItemComponent key={index} item={item} />
          })}
      </List>
    </Box>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
