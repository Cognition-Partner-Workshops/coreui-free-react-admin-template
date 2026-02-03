import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
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
              <>
                <strong>MUI List</strong> <Typography component="span">Basic example</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The default list is built with List and ListItem components from MUI.
            </Typography>
            <DocsExample href="react-list">
              <List sx={{ bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}>
                <ListItem divider>
                  <ListItemText primary="Cras justo odio" />
                </ListItem>
                <ListItem divider>
                  <ListItemText primary="Dapibus ac facilisis in" />
                </ListItem>
                <ListItem divider>
                  <ListItemText primary="Morbi leo risus" />
                </ListItem>
                <ListItem divider>
                  <ListItemText primary="Porta ac consectetur ac" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Vestibulum at eros" />
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
              <>
                <strong>MUI List</strong> <Typography component="span">With Badges</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add badges to any list item to show unread counts, activity, and more.
            </Typography>
            <DocsExample href="react-list#with-badges">
              <List sx={{ bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}>
                <ListItem
                  divider
                  secondaryAction={<Chip label="14" color="primary" size="small" />}
                >
                  <ListItemText primary="Cras justo odio" />
                </ListItem>
                <ListItem divider secondaryAction={<Chip label="2" color="primary" size="small" />}>
                  <ListItemText primary="Dapibus ac facilisis in" />
                </ListItem>
                <ListItem secondaryAction={<Chip label="1" color="primary" size="small" />}>
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
              <>
                <strong>MUI List</strong> <Typography component="span">Clickable Items</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use ListItemButton for clickable list items with hover states.
            </Typography>
            <DocsExample href="react-list#interactive">
              <List sx={{ bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}>
                <ListItemButton selected divider>
                  <ListItemText primary="Cras justo odio (Active)" />
                </ListItemButton>
                <ListItemButton divider>
                  <ListItemText primary="Dapibus ac facilisis in" />
                </ListItemButton>
                <ListItemButton divider>
                  <ListItemText primary="Morbi leo risus" />
                </ListItemButton>
                <ListItemButton disabled>
                  <ListItemText primary="Vestibulum at eros (Disabled)" />
                </ListItemButton>
              </List>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI List</strong> <Typography component="span">With Checkboxes</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Place MUI checkboxes within list items.
            </Typography>
            <DocsExample href="react-list#checkbox">
              <List sx={{ bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}>
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
