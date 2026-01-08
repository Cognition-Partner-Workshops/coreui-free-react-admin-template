import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

import ReactImg from 'src/assets/images/react.jpg'

const Placeholders = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/placeholder/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Placeholder</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              In the example below, we take a typical card component and recreate it with
              placeholders applied to create a &quot;loading card&quot;. Size and proportions are
              the same between the two.
            </Typography>
            <DocsExample href="components/placeholder">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  p: 3,
                  flexWrap: 'wrap',
                  gap: 2,
                }}
              >
                <Card sx={{ width: 288 }}>
                  <CardMedia component="img" height="180" image={ReactImg} alt="React" />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Card title
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Some quick example text to build on the card title and make up the bulk of the
                      card&apos;s content.
                    </Typography>
                    <Button variant="contained" color="primary" href="#">
                      Go somewhere
                    </Button>
                  </CardContent>
                </Card>
                <Card sx={{ width: 288 }}>
                  <Skeleton variant="rectangular" height={180} />
                  <CardContent>
                    <Skeleton variant="text" width="60%" height={32} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" width="80%" />
                    <Skeleton variant="rectangular" width={100} height={36} sx={{ mt: 2 }} />
                  </CardContent>
                </Card>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Placeholder</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Create placeholders with the Skeleton component. They can replace the text inside an
              element or be added as a modifier class to an existing component.
            </Typography>
            <DocsExample href="components/placeholder">
              <Skeleton variant="text" width="50%" />
              <Skeleton variant="rectangular" width={100} height={36} sx={{ mt: 2 }} />
            </DocsExample>
          </CardContent>
        </Card>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Placeholder{' '}
                <Typography component="span" variant="body2">
                  Width
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              You can change the width through the width prop or inline styles.
            </Typography>
            <DocsExample href="components/placeholder#width">
              <Skeleton variant="text" width="50%" />
              <Skeleton variant="text" width="75%" />
              <Skeleton variant="text" width="30%" />
            </DocsExample>
          </CardContent>
        </Card>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Placeholder{' '}
                <Typography component="span" variant="body2">
                  Sizing
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The size of Skeleton can be customized with the height prop.
            </Typography>
            <DocsExample href="components/placeholder#sizing">
              <Skeleton variant="text" height={40} />
              <Skeleton variant="text" height={24} />
              <Skeleton variant="text" height={16} />
              <Skeleton variant="text" height={12} />
            </DocsExample>
          </CardContent>
        </Card>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Placeholder{' '}
                <Typography component="span" variant="body2">
                  Animation
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Animate placeholders with animation=&quot;wave&quot; or animation=&quot;pulse&quot; to
              better convey the perception of something being actively loaded.
            </Typography>
            <DocsExample href="components/placeholder#animation">
              <Skeleton variant="text" animation="wave" />
              <Skeleton variant="text" animation="pulse" sx={{ mt: 2 }} />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Placeholders
