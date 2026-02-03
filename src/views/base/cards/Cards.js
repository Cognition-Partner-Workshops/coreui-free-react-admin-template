import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

import ReactImg from 'src/assets/images/react.jpg'

const Cards = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/card/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Card</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Cards contain content and actions about a single subject.
            </Typography>
            <DocsExample href="react-card">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" height="180" image={ReactImg} alt="React" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
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
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Card</strong> <Typography component="span">Body</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The building block of a card is the CardContent.
            </Typography>
            <DocsExample href="react-card#card-body">
              <Card>
                <CardContent>This is some text within a card body.</CardContent>
              </Card>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Card</strong>{' '}
                <Typography component="span">Titles, text, and links</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Card titles and subtitles are used by adding Typography components.
            </Typography>
            <DocsExample href="react-card#titles-text-and-links">
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Card title
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    Card subtitle
                  </Typography>
                  <Typography variant="body2">
                    Some quick example text to build on the card title and make up the bulk of the
                    card&apos;s content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Card link</Button>
                  <Button size="small">Another link</Button>
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
              <>
                <strong>MUI Card</strong>{' '}
                <Typography component="span">Header and Footer</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add an optional header and/or footer within a card.
            </Typography>
            <DocsExample href="react-card#header-and-footer">
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader title="Featured" />
                <CardContent>
                  <Typography variant="h5" component="div">
                    Special title treatment
                  </Typography>
                  <Typography variant="body2">
                    With supporting text below as a natural lead-in to additional content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained">Go somewhere</Button>
                </CardActions>
                <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
                  <Typography variant="body2" color="text.secondary">
                    2 days ago
                  </Typography>
                </Box>
              </Card>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Card</strong> <Typography component="span">Grid Cards</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use MUI Grid to create a grid of cards.
            </Typography>
            <DocsExample href="react-card#grid-cards">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardHeader title="Card title" />
                    <CardContent>
                      <Typography variant="body2">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content.
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
                      <Typography variant="body2" color="text.secondary">
                        Last updated 3 mins ago
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardHeader title="Card title" />
                    <CardContent>
                      <Typography variant="body2">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content.
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
                      <Typography variant="body2" color="text.secondary">
                        Last updated 3 mins ago
                      </Typography>
                    </Box>
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
