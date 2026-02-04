import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Divider,
  Badge,
  Chip,
} from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import { DocsComponents, DocsExample } from 'src/components'

const ListGroups = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/list/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">List Group</Typography>} />
          <CardContent>
            <DocsExample href="components/list">
              <List
                sx={{
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                  border: 1,
                  borderColor: 'divider',
                }}
              >
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
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                List Group{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Active items
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/list#active-items">
              <List
                sx={{
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                  border: 1,
                  borderColor: 'divider',
                }}
              >
                <ListItemButton selected>
                  <ListItemText primary="Cras justo odio" />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                  <ListItemText primary="Dapibus ac facilisis in" />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                  <ListItemText primary="Morbi leo risus" />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                  <ListItemText primary="Porta ac consectetur ac" />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                  <ListItemText primary="Vestibulum at eros" />
                </ListItemButton>
              </List>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                List Group{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  With icons
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/list#with-icons">
              <List
                sx={{
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                  border: 1,
                  borderColor: 'divider',
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </ListItemButton>
              </List>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                List Group{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  With badges
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/list#with-badges">
              <List
                sx={{
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                  border: 1,
                  borderColor: 'divider',
                }}
              >
                <ListItem secondaryAction={<Chip label="14" color="primary" size="small" />}>
                  <ListItemText primary="Cras justo odio" />
                </ListItem>
                <Divider />
                <ListItem secondaryAction={<Chip label="2" color="primary" size="small" />}>
                  <ListItemText primary="Dapibus ac facilisis in" />
                </ListItem>
                <Divider />
                <ListItem secondaryAction={<Chip label="1" color="primary" size="small" />}>
                  <ListItemText primary="Morbi leo risus" />
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
