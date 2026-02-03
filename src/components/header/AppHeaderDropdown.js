import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
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
import TaskIcon from '@mui/icons-material/Task'
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
      <IconButton onClick={handleClick} sx={{ p: 0 }}>
        <Avatar src={avatar8} alt="User Avatar" sx={{ width: 40, height: 40 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: {
            minWidth: 200,
            mt: 1,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Typography
          variant="subtitle2"
          sx={{ px: 2, py: 1, fontWeight: 600, color: 'text.secondary' }}
        >
          Account
        </Typography>
        <MenuItem>
          <ListItemIcon>
            <NotificationsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Updates</ListItemText>
          <Badge badgeContent={42} color="info" sx={{ ml: 2 }} />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <MailIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Messages</ListItemText>
          <Badge badgeContent={42} color="success" sx={{ ml: 2 }} />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <TaskIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Tasks</ListItemText>
          <Badge badgeContent={42} color="error" sx={{ ml: 2 }} />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <CommentIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Comments</ListItemText>
          <Badge badgeContent={42} color="warning" sx={{ ml: 2 }} />
        </MenuItem>
        <Divider />
        <Typography
          variant="subtitle2"
          sx={{ px: 2, py: 1, fontWeight: 600, color: 'text.secondary' }}
        >
          Settings
        </Typography>
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
            <CreditCardIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Payments</ListItemText>
          <Badge badgeContent={42} color="secondary" sx={{ ml: 2 }} />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FolderIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Projects</ListItemText>
          <Badge badgeContent={42} color="primary" sx={{ ml: 2 }} />
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
