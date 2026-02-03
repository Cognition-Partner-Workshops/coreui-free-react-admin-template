import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

const Progress = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Progress
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Display progress indicators to show the completion status of a task.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Linear Progress
          </Typography>
          <Stack spacing={2} sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={25} />
            <LinearProgress variant="determinate" value={50} color="secondary" />
            <LinearProgress variant="determinate" value={75} color="success" />
            <LinearProgress variant="determinate" value={100} color="error" />
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Circular Progress
          </Typography>
          <Stack direction="row" spacing={2}>
            <CircularProgress variant="determinate" value={25} />
            <CircularProgress variant="determinate" value={50} color="secondary" />
            <CircularProgress variant="determinate" value={75} color="success" />
            <CircularProgress variant="determinate" value={100} color="error" />
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Indeterminate Progress
          </Typography>
          <Stack spacing={2}>
            <LinearProgress />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress />
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default Progress
