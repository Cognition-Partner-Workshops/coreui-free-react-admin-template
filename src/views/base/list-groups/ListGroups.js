import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Chip from '@mui/material/Chip'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import Paper from '@mui/material/Paper'

const ListGroups = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="List Group" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The most basic list group is an unordered list with list items.
            </Typography>
            <Paper variant="outlined" sx={{ maxWidth: 360 }}>
              <List>
                <ListItem>
                  <ListItemText primary="Cras justo odio" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Dapibus ac facilisis in" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Morbi leo risus" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Porta ac consectetur ac" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Vestibulum at eros" />
                </ListItem>
              </List>
            </Paper>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="List Group" subheader="Active items" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add selected prop to a ListItemButton to indicate the current active selection.
            </Typography>
            <Paper variant="outlined" sx={{ maxWidth: 360 }}>
              <List>
                <ListItemButton selected>
                  <ListItemText primary="Cras justo odio" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Dapibus ac facilisis in" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Morbi leo risus" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Porta ac consectetur ac" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Vestibulum at eros" />
                </ListItemButton>
              </List>
            </Paper>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="List Group" subheader="With badges" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add badges to any list group item to show unread counts, activity, and more.
            </Typography>
            <Paper variant="outlined" sx={{ maxWidth: 360 }}>
              <List>
                <ListItem secondaryAction={<Chip label="14" size="small" color="primary" />}>
                  <ListItemText primary="Cras justo odio" />
                </ListItem>
                <ListItem secondaryAction={<Chip label="2" size="small" color="primary" />}>
                  <ListItemText primary="Dapibus ac facilisis in" />
                </ListItem>
                <ListItem secondaryAction={<Chip label="1" size="small" color="primary" />}>
                  <ListItemText primary="Morbi leo risus" />
                </ListItem>
              </List>
            </Paper>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="List Group" subheader="With icons" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add icons to list items for better visual hierarchy.
            </Typography>
            <Paper variant="outlined" sx={{ maxWidth: 360 }}>
              <List>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </ListItemButton>
              </List>
            </Paper>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ListGroups
