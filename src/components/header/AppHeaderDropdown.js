import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MailIcon from '@mui/icons-material/Mail'
import AssignmentIcon from '@mui/icons-material/Assignment'
import CommentIcon from '@mui/icons-material/Comment'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import FolderIcon from '@mui/icons-material/Folder'
import LockIcon from '@mui/icons-material/Lock'

import avatar8 from './../../assets/images/avatars/8.jpg'

const AppHeaderDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 1 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar src={avatar8} sx={{ width: 32, height: 32 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          sx: {
            minWidth: 200,
          },
        }}
      >
        <Box sx={{ px: 2, py: 1, backgroundColor: 'action.hover' }}>
          <Typography variant="subtitle2" fontWeight="bold">
            Account
          </Typography>
        </Box>
        <MenuItem>
          <ListItemIcon>
            <Badge badgeContent={42} color="info" max={99}>
              <NotificationsIcon fontSize="small" />
            </Badge>
          </ListItemIcon>
          <ListItemText>Updates</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Badge badgeContent={42} color="success" max={99}>
              <MailIcon fontSize="small" />
            </Badge>
          </ListItemIcon>
          <ListItemText>Messages</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Badge badgeContent={42} color="error" max={99}>
              <AssignmentIcon fontSize="small" />
            </Badge>
          </ListItemIcon>
          <ListItemText>Tasks</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Badge badgeContent={42} color="warning" max={99}>
              <CommentIcon fontSize="small" />
            </Badge>
          </ListItemIcon>
          <ListItemText>Comments</ListItemText>
        </MenuItem>
        <Box sx={{ px: 2, py: 1, backgroundColor: 'action.hover' }}>
          <Typography variant="subtitle2" fontWeight="bold">
            Settings
          </Typography>
        </Box>
        <MenuItem>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Badge badgeContent={42} color="secondary" max={99}>
              <CreditCardIcon fontSize="small" />
            </Badge>
          </ListItemIcon>
          <ListItemText>Payments</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Badge badgeContent={42} color="primary" max={99}>
              <FolderIcon fontSize="small" />
            </Badge>
          </ListItemIcon>
          <ListItemText>Projects</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <LockIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Lock Account</ListItemText>
        </MenuItem>
      </Menu>
    </>
  )
}

export default AppHeaderDropdown
