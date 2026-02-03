import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'

import { DocsExample } from 'src/components'

const ListGroups = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="List Groups" />
      <CardContent>
        <DocsExample href="components/list-group">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <List
                sx={{
                  bgcolor: 'background.paper',
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 1,
                }}
              >
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
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <List
                sx={{
                  bgcolor: 'background.paper',
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 1,
                }}
              >
                <ListItemButton divider selected>
                  <ListItemText primary="Cras justo odio" />
                </ListItemButton>
                <ListItemButton divider>
                  <ListItemText primary="Dapibus ac facilisis in" />
                </ListItemButton>
                <ListItemButton divider>
                  <ListItemText primary="Morbi leo risus" />
                </ListItemButton>
                <ListItemButton divider disabled>
                  <ListItemText primary="Porta ac consectetur ac" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Vestibulum at eros" />
                </ListItemButton>
              </List>
            </Grid>
          </Grid>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default ListGroups
