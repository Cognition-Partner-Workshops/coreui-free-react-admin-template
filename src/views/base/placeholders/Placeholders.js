import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

const Placeholders = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Placeholders
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Use loading placeholders (Skeletons) for your components while content is loading.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Text Skeletons
          </Typography>
          <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="80%" />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="60%" />
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Different Variants
          </Typography>
          <Stack spacing={2}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Card Placeholder
          </Typography>
          <Box sx={{ maxWidth: 345 }}>
            <Skeleton variant="rectangular" height={140} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}

export default Placeholders
