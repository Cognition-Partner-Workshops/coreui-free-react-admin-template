import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'

const Spinners = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Spinners
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Indicate the loading state of a component or page.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Circular Spinners
          </Typography>
          <Stack direction="row" spacing={2}>
            <CircularProgress />
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="error" />
            <CircularProgress color="warning" />
            <CircularProgress color="info" />
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Spinner Sizes
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <CircularProgress size={20} />
            <CircularProgress size={30} />
            <CircularProgress size={40} />
            <CircularProgress size={50} />
            <CircularProgress size={60} />
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default Spinners
