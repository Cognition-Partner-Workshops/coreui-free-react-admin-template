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
      <IconButton onClick={handleClick} size="small" sx={{ ml: 1 }}>
        <Avatar src={avatar8} sx={{ width: 40, height: 40 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: { width: 280, maxHeight: 400 },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ px: 2, py: 1, bgcolor: 'action.hover' }}>
          <Typography variant="subtitle2" fontWeight={600}>
            Account
          </Typography>
        </Box>
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
        <Box sx={{ px: 2, py: 1, bgcolor: 'action.hover' }}>
          <Typography variant="subtitle2" fontWeight={600}>
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
            <CreditCardIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Payments</ListItemText>
          <Badge badgeContent={42} color="default" sx={{ ml: 2 }} />
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
