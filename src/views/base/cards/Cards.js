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
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
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
              <>
                <strong>Card</strong> <small>Example</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Cards are built with as little markup and styles as possible but still manage to
              deliver a bunch of control and customization.
            </Typography>
            <DocsExample href="components/card">
              <Card sx={{ width: 288 }}>
                <CardMedia component="img" height="180" image={ReactImg} alt="React" />
                <CardContent>
                  <Typography variant="h6">Card title</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Some quick example text to build on the card title.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained">Go somewhere</Button>
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
                <strong>Card</strong> <small>Body</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The main block of a card is the CardContent.
            </Typography>
            <DocsExample href="components/card/#body">
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
                <strong>Card</strong> <small>Titles, text, and links</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Card titles are managed by Typography component.
            </Typography>
            <DocsExample href="components/card/#titles-text-and-links">
              <Card sx={{ width: 288 }}>
                <CardContent>
                  <Typography variant="h6">Card title</Typography>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
                    Card subtitle
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Some quick example text.
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Link href="#" sx={{ mr: 2 }}>
                      Card link
                    </Link>
                    <Link href="#">Another link</Link>
                  </Box>
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
              <>
                <strong>Card</strong> <small>Images</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              CardMedia places a picture to the top of the card.
            </Typography>
            <DocsExample href="components/card/#images">
              <Card sx={{ width: 288 }}>
                <CardMedia component="img" height="180" image={ReactImg} alt="React" />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Some quick example text.
                  </Typography>
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
              <>
                <strong>Card</strong> <small>List groups</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Create lists of content in a card with a flush list group.
            </Typography>
            <DocsExample href="components/card/#list-groups">
              <Grid container spacing={2}>
                <Grid item lg={4}>
                  <Card>
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
                </Grid>
                <Grid item lg={4}>
                  <Card>
                    <CardHeader title="Header" />
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
                </Grid>
              </Grid>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>Card</strong> <small>Header and footer</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add an optional header and/or footer within a card.
            </Typography>
            <DocsExample href="components/card/#header-and-footer">
              <Card>
                <CardHeader title="Header" />
                <CardContent>
                  <Typography variant="h6">Special title treatment</Typography>
                  <Typography variant="body2" color="text.secondary">
                    With supporting text below.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained">Go somewhere</Button>
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
                <strong>Card</strong> <small>Navigation</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add some navigation to a CardHeader with MUI Tabs component.
            </Typography>
            <DocsExample href="components/card/##navigation">
              <Card sx={{ textAlign: 'center' }}>
                <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)} centered>
                  <Tab label="Active" />
                  <Tab label="Link" />
                  <Tab label="Disabled" disabled />
                </Tabs>
                <CardContent>
                  <Typography variant="h6">Special title treatment</Typography>
                  <Typography variant="body2" color="text.secondary">
                    With supporting text below.
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button variant="contained">Go somewhere</Button>
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
                <strong>Card</strong> <small>Card groups</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use a grid of cards to render cards as a single, attached element.
            </Typography>
            <DocsExample href="components/card/#card-groups">
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Card sx={{ height: '100%' }}>
                    <CardMedia component="img" height="180" image={ReactImg} alt="React" />
                    <CardContent>
                      <Typography variant="h6">Card title</Typography>
                      <Typography variant="body2" color="text.secondary">
                        This is a wider card with supporting text.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card sx={{ height: '100%' }}>
                    <CardMedia component="img" height="180" image={ReactImg} alt="React" />
                    <CardContent>
                      <Typography variant="h6">Card title</Typography>
                      <Typography variant="body2" color="text.secondary">
                        This card has supporting text below.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card sx={{ height: '100%' }}>
                    <CardMedia component="img" height="180" image={ReactImg} alt="React" />
                    <CardContent>
                      <Typography variant="h6">Card title</Typography>
                      <Typography variant="body2" color="text.secondary">
                        This is a wider card with even longer content.
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
