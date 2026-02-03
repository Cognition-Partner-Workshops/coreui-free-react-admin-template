import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { DocsExample } from 'src/components'

const Cards = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Cards" />
      <CardContent>
        <DocsExample href="components/card">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card>
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
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Card title
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Card subtitle
                  </Typography>
                  <Typography variant="body2">
                    Some quick example text to build on the card title.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Card link</Button>
                  <Button size="small">Another link</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card>
                <CardHeader title="Featured" />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Special title treatment
                  </Typography>
                  <Typography variant="body2">
                    With supporting text below as a natural lead-in to additional content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained">Go somewhere</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Cards
