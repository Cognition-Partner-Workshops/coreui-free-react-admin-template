import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  Typography,
  Grid,
  Button,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

const Cards = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/card/" />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
        <Card>
          <CardMedia
            component="img"
            height="180"
            image="https://picsum.photos/400/200"
            alt="Card image"
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Card title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Some quick example text to build on the card title and make up the bulk of the
              card&apos;s content.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained">
              Go somewhere
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Card title
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Card subtitle
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Some quick example text to build on the card title and make up the bulk of the
              card&apos;s content.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Card link</Button>
            <Button size="small">Another link</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Some quick example text to build on the card title and make up the bulk of the
              card&apos;s content.
            </Typography>
          </CardContent>
          <List dense>
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

      <Grid size={12}>
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Card Variants</Typography>} />
          <CardContent>
            <DocsExample href="components/card#card-styles">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Card sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
                    <CardHeader title="Primary" />
                    <CardContent>
                      <Typography variant="body2">
                        Some quick example text to build on the card title.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Card sx={{ bgcolor: 'secondary.main', color: 'secondary.contrastText' }}>
                    <CardHeader title="Secondary" />
                    <CardContent>
                      <Typography variant="body2">
                        Some quick example text to build on the card title.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Card sx={{ bgcolor: 'success.main', color: 'success.contrastText' }}>
                    <CardHeader title="Success" />
                    <CardContent>
                      <Typography variant="body2">
                        Some quick example text to build on the card title.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Card sx={{ bgcolor: 'error.main', color: 'error.contrastText' }}>
                    <CardHeader title="Error" />
                    <CardContent>
                      <Typography variant="body2">
                        Some quick example text to build on the card title.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Card sx={{ bgcolor: 'warning.main', color: 'warning.contrastText' }}>
                    <CardHeader title="Warning" />
                    <CardContent>
                      <Typography variant="body2">
                        Some quick example text to build on the card title.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Card sx={{ bgcolor: 'info.main', color: 'info.contrastText' }}>
                    <CardHeader title="Info" />
                    <CardContent>
                      <Typography variant="body2">
                        Some quick example text to build on the card title.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={12}>
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Outlined Cards</Typography>} />
          <CardContent>
            <DocsExample href="components/card#border">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Card variant="outlined" sx={{ borderColor: 'primary.main' }}>
                    <CardHeader title="Primary" />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Some quick example text to build on the card title.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Card variant="outlined" sx={{ borderColor: 'success.main' }}>
                    <CardHeader title="Success" />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Some quick example text to build on the card title.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Card variant="outlined" sx={{ borderColor: 'error.main' }}>
                    <CardHeader title="Error" />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Some quick example text to build on the card title.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Card variant="outlined" sx={{ borderColor: 'warning.main' }}>
                    <CardHeader title="Warning" />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Some quick example text to build on the card title.
                      </Typography>
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
