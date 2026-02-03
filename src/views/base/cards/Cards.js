import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

import ReactImg from 'src/assets/images/react.jpg'

const Cards = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Card" subheader="Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Cards are built with as little markup and styles as possible but still manage to
              deliver a bunch of control and customization. Built with flexbox, they offer easy
              alignment and mix well with other components.
            </Typography>
            <Card sx={{ maxWidth: 288 }}>
              <CardMedia component="img" height="140" image={ReactImg} alt="React" />
              <CardContent>
                <Typography variant="h6" component="div">
                  Card title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Some quick example text to build on the card title and make up the bulk of the
                  card&apos;s content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" size="small">
                  Go somewhere
                </Button>
              </CardActions>
            </Card>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Card" subheader="Body" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The main block of a card is the CardContent. Use it whenever you need a padded section
              within a card.
            </Typography>
            <Card>
              <CardContent>
                <Typography>This is some text within a card body.</Typography>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Card" subheader="Titles, text, and links" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Card titles are managed by Typography component. Links can be added using the Link
              component.
            </Typography>
            <Card sx={{ maxWidth: 288 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  Card title
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                  Card subtitle
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Some quick example text to build on the card title and make up the bulk of the
                  card&apos;s content.
                </Typography>
                <Link href="#" sx={{ mr: 2 }}>
                  Card link
                </Link>
                <Link href="#">Another link</Link>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Card" subheader="List groups" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Create lists of content in a card with a flush list group.
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, lg: 4 }}>
                <Card>
                  <List>
                    <ListItem>
                      <ListItemText primary="Cras justo odio" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="Dapibus ac facilisis in" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="Vestibulum at eros" />
                    </ListItem>
                  </List>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, lg: 4 }}>
                <Card>
                  <CardHeader title="Header" />
                  <List>
                    <ListItem>
                      <ListItemText primary="Cras justo odio" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="Dapibus ac facilisis in" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="Vestibulum at eros" />
                    </ListItem>
                  </List>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, lg: 4 }}>
                <Card>
                  <List>
                    <ListItem>
                      <ListItemText primary="Cras justo odio" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="Dapibus ac facilisis in" />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="Vestibulum at eros" />
                    </ListItem>
                  </List>
                  <CardActions sx={{ bgcolor: 'action.hover', justifyContent: 'center' }}>
                    <Typography variant="body2">Footer</Typography>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Card" subheader="Header and footer" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add an optional header and/or footer within a card.
            </Typography>
            <Card>
              <CardHeader title="Header" />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Special title treatment
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  With supporting text below as a natural lead-in to additional content.
                </Typography>
                <Button variant="contained" color="primary">
                  Go somewhere
                </Button>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Cards
