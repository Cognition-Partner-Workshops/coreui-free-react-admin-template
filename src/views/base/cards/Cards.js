import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const Cards = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Cards
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Cards contain content and actions about a single subject.
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <Card>
            <CardHeader title="Card Title" subheader="Card subtitle" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Some quick example text to build on the card title and make up the bulk of the card
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Go somewhere</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <Card>
            <CardMedia component="div" sx={{ height: 140, bgcolor: 'primary.main' }} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Card with Media
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cards can include media like images or videos at the top.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <Card sx={{ bgcolor: 'primary.main', color: 'white' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Primary Card
              </Typography>
              <Typography variant="body2">This is a card with primary background color.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <Card sx={{ bgcolor: 'success.main', color: 'white' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Success Card
              </Typography>
              <Typography variant="body2">This is a card with success background color.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <Card sx={{ bgcolor: 'warning.main', color: 'black' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Warning Card
              </Typography>
              <Typography variant="body2">This is a card with warning background color.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <Card sx={{ bgcolor: 'error.main', color: 'white' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Error Card
              </Typography>
              <Typography variant="body2">This is a card with error background color.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Cards
