import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'
import ReactImg from 'src/assets/images/react.jpg'

const Cards = () => {
  const [tabValue, setTabValue] = React.useState(0)
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/card/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Card{' '}
                <Typography component="span" variant="body2">
                  Example
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Cards are built with as little markup and styles as possible.
            </Typography>
            <DocsExample href="components/card">
              <Card sx={{ maxWidth: 288 }}>
                <CardMedia component="img" height="180" image={ReactImg} alt="React" />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Card title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Some quick example text.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="primary" size="small">
                    Go somewhere
                  </Button>
                </CardActions>
              </Card>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Card{' '}
                <Typography component="span" variant="body2">
                  List groups
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/card/#list-groups">
              <Card sx={{ maxWidth: 288 }}>
                <List>
                  <ListItem divider>
                    <ListItemText primary="Cras justo odio" />
                  </ListItem>
                  <ListItem divider>
                    <ListItemText primary="Dapibus ac facilisis in" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Vestibulum at eros" />
                  </ListItem>
                </List>
              </Card>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Card{' '}
                <Typography component="span" variant="body2">
                  Navigation
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/card/#navigation">
              <Card>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
                    <Tab label="Active" />
                    <Tab label="Link" />
                    <Tab label="Disabled" disabled />
                  </Tabs>
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Special title treatment
                  </Typography>
                  <Button variant="contained" color="primary">
                    Go somewhere
                  </Button>
                </CardContent>
              </Card>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Card{' '}
                <Typography component="span" variant="body2">
                  Card styles
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/card/#background-and-color">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
                    <CardHeader title="Primary" />
                    <CardContent>
                      <Typography variant="body2">Example text.</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ bgcolor: 'success.main', color: 'success.contrastText' }}>
                    <CardHeader title="Success" />
                    <CardContent>
                      <Typography variant="body2">Example text.</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ bgcolor: 'error.main', color: 'error.contrastText' }}>
                    <CardHeader title="Danger" />
                    <CardContent>
                      <Typography variant="body2">Example text.</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ bgcolor: 'warning.main', color: 'warning.contrastText' }}>
                    <CardHeader title="Warning" />
                    <CardContent>
                      <Typography variant="body2">Example text.</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default Cards
