import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

const Placeholders = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Placeholders" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use loading placeholders (skeletons) for your components or pages to indicate
              something may still be loading.
            </Typography>
            <Card sx={{ maxWidth: 288 }}>
              <Skeleton variant="rectangular" height={140} />
              <CardContent>
                <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="rectangular" width={100} height={36} sx={{ mt: 2 }} />
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Placeholders" subheader="Variants" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The component supports different variants: text, circular, rectangular, and rounded.
            </Typography>
            <Stack spacing={1}>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Placeholders" subheader="Animations" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              By default, the skeleton pulsates, but you can change the animation to a wave or
              disable it entirely.
            </Typography>
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Box>
                <Typography variant="caption" display="block" gutterBottom>
                  Pulse (default)
                </Typography>
                <Skeleton variant="rectangular" width={210} height={118} />
              </Box>
              <Box>
                <Typography variant="caption" display="block" gutterBottom>
                  Wave
                </Typography>
                <Skeleton variant="rectangular" width={210} height={118} animation="wave" />
              </Box>
              <Box>
                <Typography variant="caption" display="block" gutterBottom>
                  No animation
                </Typography>
                <Skeleton variant="rectangular" width={210} height={118} animation={false} />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Placeholders
