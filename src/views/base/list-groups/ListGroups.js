import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'

const ListGroups = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        List Groups
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Lists are continuous, vertical indexes of text or images.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic List
          </Typography>
          <List sx={{ bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemText primary="Cras justo odio" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Dapibus ac facilisis in" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Morbi leo risus" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Porta ac consectetur ac" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Vestibulum at eros" />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            List with Icons
          </Typography>
          <List sx={{ bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </>
  )
}

export default ListGroups
