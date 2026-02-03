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
          <CardHeader title={<strong>React Placeholder</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              In the example below, we take a typical card component and recreate it with
              placeholders applied to create a &quot;loading card&quot;. Size and proportions are
              the same between the two.
            </Typography>
            <DocsExample href="components/placeholder">
              <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 3, gap: 2 }}>
                <Card sx={{ width: 288 }}>
                  <CardMedia component="img" height="180" image={ReactImg} alt="React" />
                  <CardContent>
                    <Typography variant="h6">Card title</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Some quick example text to build on the card title and make up the bulk of the
                      card&apos;s content.
                    </Typography>
                    <Button variant="contained" sx={{ mt: 2 }}>
                      Go somewhere
                    </Button>
                  </CardContent>
                </Card>
                <Card sx={{ width: 288 }}>
                  <Skeleton variant="rectangular" height={180} />
                  <CardContent>
                    <Skeleton variant="text" width="60%" />
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
          <CardHeader title={<strong>React Placeholder</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Create placeholders with the Skeleton component to set the width. They can replace the
              text inside an element or be added as a modifier class to an existing component.
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
              <>
                <strong>React Placeholder</strong> <small>Width</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              You can change the width through width utilities or inline styles.
            </Typography>
            <DocsExample href="components/placeholder#width">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Skeleton variant="text" width="50%" />
                <Skeleton variant="text" width="75%" />
                <Skeleton variant="text" width="30%" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Placeholder</strong> <small>Color</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              By default, the Skeleton uses the theme colors. This can be overridden with custom
              colors.
            </Typography>
            <DocsExample href="components/placeholder#color">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Skeleton variant="text" />
                <Skeleton variant="text" sx={{ bgcolor: 'primary.light' }} />
                <Skeleton variant="text" sx={{ bgcolor: 'secondary.light' }} />
                <Skeleton variant="text" sx={{ bgcolor: 'success.light' }} />
                <Skeleton variant="text" sx={{ bgcolor: 'error.light' }} />
                <Skeleton variant="text" sx={{ bgcolor: 'warning.light' }} />
                <Skeleton variant="text" sx={{ bgcolor: 'info.light' }} />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Placeholder</strong> <small>Sizing</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The size of Skeletons can be customized with height prop.
            </Typography>
            <DocsExample href="components/placeholder#sizing">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Skeleton variant="text" height={40} />
                <Skeleton variant="text" height={30} />
                <Skeleton variant="text" height={20} />
                <Skeleton variant="text" height={10} />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Placeholder</strong> <small>Animation</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Animate placeholders with animation=&quot;pulse&quot; or animation=&quot;wave&quot; to
              better convey the perception of something being actively loaded.
            </Typography>
            <DocsExample href="components/placeholder#animation">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Skeleton variant="text" animation="pulse" />
                <Skeleton variant="text" animation="wave" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Placeholders
