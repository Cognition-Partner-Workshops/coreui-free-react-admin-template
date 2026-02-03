import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { DocsComponents, DocsExample } from 'src/components'

import ReactImg from 'src/assets/images/react.jpg'

const Placeholders = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/placeholder/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Skeleton</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              MUI Skeleton displays a placeholder preview of your content before the data gets
              loaded to reduce load-time frustration.
            </Typography>
            <DocsExample href="react-skeleton">
              <Box sx={{ display: 'flex', gap: 4 }}>
                <Card sx={{ width: 288 }}>
                  <Box
                    component="img"
                    src={ReactImg}
                    alt="React"
                    sx={{ width: '100%', height: 180, objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h6">Card title</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Some quick example text to build on the card title.
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
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Skeleton</strong> <Typography component="span">Variants</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The component supports 3 shape variants: text, circular, and rectangular.
            </Typography>
            <DocsExample href="react-skeleton#variants">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Skeleton</strong> <Typography component="span">Animation</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              By default, the skeleton pulsates. You can change the animation to a wave or disable
              it entirely.
            </Typography>
            <DocsExample href="react-skeleton#animation">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Skeleton animation="pulse" />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Placeholders
