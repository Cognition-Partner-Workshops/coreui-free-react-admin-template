import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Chip from '@mui/material/Chip'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const ListGroups = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/list-group/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React List Group <Typography component="span" variant="body2">Basic example</Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The default list group is an unordered list with items and the proper CSS classes.
              Build upon it with the options that follow, or with your CSS as required.
            </Typography>
            <DocsExample href="components/list-group">
              <List sx={{ bgcolor: 'background.paper', border: 1, borderColor: 'divider', borderRadius: 1 }}>
                <ListItem divider><ListItemText primary="Cras justo odio" /></ListItem>
                <ListItem divider><ListItemText primary="Dapibus ac facilisis in" /></ListItem>
                <ListItem divider><ListItemText primary="Morbi leo risus" /></ListItem>
                <ListItem divider><ListItemText primary="Porta ac consectetur ac" /></ListItem>
                <ListItem><ListItemText primary="Vestibulum at eros" /></ListItem>
              </List>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React List Group <Typography component="span" variant="body2">Active items</Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add <code>selected</code> prop to a ListItem to show the current active selection.
            </Typography>
            <DocsExample href="components/list-group/#active-items">
              <List sx={{ bgcolor: 'background.paper', border: 1, borderColor: 'divider', borderRadius: 1 }}>
                <ListItem divider selected><ListItemText primary="Cras justo odio" /></ListItem>
                <ListItem divider><ListItemText primary="Dapibus ac facilisis in" /></ListItem>
                <ListItem divider><ListItemText primary="Morbi leo risus" /></ListItem>
                <ListItem divider><ListItemText primary="Porta ac consectetur ac" /></ListItem>
                <ListItem><ListItemText primary="Vestibulum at eros" /></ListItem>
              </List>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React List Group <Typography component="span" variant="body2">With badges</Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add badges to any list group item to show unread counts, activity, and more.
            </Typography>
            <DocsExample href="components/list-group/#with-badges">
              <List sx={{ bgcolor: 'background.paper', border: 1, borderColor: 'divider', borderRadius: 1 }}>
                <ListItem
                  divider
                  secondaryAction={<Chip label="14" color="primary" size="small" />}
                >
                  <ListItemText primary="Cras justo odio" />
                </ListItem>
                <ListItem
                  divider
                  secondaryAction={<Chip label="2" color="primary" size="small" />}
                >
                  <ListItemText primary="Dapibus ac facilisis in" />
                </ListItem>
                <ListItem
                  secondaryAction={<Chip label="1" color="primary" size="small" />}
                >
                  <ListItemText primary="Morbi leo risus" />
                </ListItem>
              </List>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React List Group <Typography component="span" variant="body2">Checkboxes</Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Place MUI checkboxes within list group items and customize as needed.
            </Typography>
            <DocsExample href="components/list-group/#checkboxes-and-radios">
              <List sx={{ bgcolor: 'background.paper', border: 1, borderColor: 'divider', borderRadius: 1 }}>
                <ListItem divider>
                  <Checkbox edge="start" />
                  <ListItemText primary="Cras justo odio" />
                </ListItem>
                <ListItem divider>
                  <Checkbox edge="start" defaultChecked />
                  <ListItemText primary="Dapibus ac facilisis in" />
                </ListItem>
                <ListItem divider>
                  <Checkbox edge="start" defaultChecked />
                  <ListItemText primary="Morbi leo risus" />
                </ListItem>
                <ListItem divider>
                  <Checkbox edge="start" />
                  <ListItemText primary="Porta ac consectetur ac" />
                </ListItem>
                <ListItem>
                  <Checkbox edge="start" />
                  <ListItemText primary="Vestibulum at eros" />
                </ListItem>
              </List>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ListGroups
