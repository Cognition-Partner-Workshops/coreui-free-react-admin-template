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

const NavGroup = ({ item, index }) => {
  const [open, setOpen] = useState(false)
  const { name, icon, items: children } = item

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <ListItemButton onClick={handleClick} sx={{ pl: 2 }}>
        {icon && <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>{icon}</ListItemIcon>}
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children?.map((child, idx) =>
            child.items ? (
              <NavGroup key={idx} item={child} index={idx} />
            ) : (
              <NavItem key={idx} item={child} index={idx} indent />
            ),
          )}
        </List>
      </Collapse>
    </>
  )
}

NavGroup.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}

const NavItem = ({ item, index, indent = false }) => {
  const location = useLocation()
  const { name, badge, icon, to, href } = item
  const isActive = to && location.pathname === to

  if (item.component?.name === 'CNavTitle') {
    return (
      <Typography
        variant="overline"
        sx={{
          px: 2,
          pt: 2,
          pb: 1,
          display: 'block',
          color: 'grey.500',
          fontWeight: 'bold',
        }}
      >
        {name}
      </Typography>
    )
  }

  const linkProps = to
    ? { component: NavLink, to }
    : href
      ? { component: 'a', href, target: '_blank', rel: 'noopener noreferrer' }
      : {}

  return (
    <ListItem disablePadding>
      <ListItemButton
        {...linkProps}
        selected={isActive}
        sx={{
          pl: indent ? 4 : 2,
          '&.Mui-selected': {
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          },
        }}
      >
        {icon ? (
          <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>{icon}</ListItemIcon>
        ) : indent ? (
          <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
            <FiberManualRecordIcon sx={{ fontSize: 8 }} />
          </ListItemIcon>
        ) : null}
        <ListItemText primary={name} />
        {badge && (
          <Chip
            label={badge.text}
            size="small"
            color={badge.color === 'info' ? 'info' : badge.color === 'danger' ? 'error' : 'primary'}
            sx={{ ml: 1 }}
          />
        )}
      </ListItemButton>
    </ListItem>
  )
}

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  indent: PropTypes.bool,
}

export const AppSidebarNav = ({ items }) => {
  return (
    <Box sx={{ overflow: 'auto', flexGrow: 1 }}>
      <List>
        {items &&
          items.map((item, index) =>
            item.items ? (
              <NavGroup key={index} item={item} index={index} />
            ) : (
              <NavItem key={index} item={item} index={index} />
            ),
          )}
      </List>
    </Box>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
