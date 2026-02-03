import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

const Progress = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Progress" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Progress components are built with flexbox and CSS transitions.
            </Typography>
            <Stack spacing={2}>
              <LinearProgress variant="determinate" value={0} />
              <LinearProgress variant="determinate" value={25} />
              <LinearProgress variant="determinate" value={50} />
              <LinearProgress variant="determinate" value={75} />
              <LinearProgress variant="determinate" value={100} />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Progress" subheader="Labels" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add labels to your progress bars by placing text within.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" value={25} />
              </Box>
              <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">
                  25%
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Progress" subheader="Height" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Set a height value on the LinearProgress using sx prop.
            </Typography>
            <Stack spacing={2}>
              <LinearProgress variant="determinate" value={25} sx={{ height: 2 }} />
              <LinearProgress variant="determinate" value={25} sx={{ height: 10 }} />
              <LinearProgress variant="determinate" value={25} sx={{ height: 20 }} />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Progress" subheader="Colors" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use color prop to change the appearance of individual progress bars.
            </Typography>
            <Stack spacing={2}>
              <LinearProgress variant="determinate" value={25} color="success" />
              <LinearProgress variant="determinate" value={50} color="info" />
              <LinearProgress variant="determinate" value={75} color="warning" />
              <LinearProgress variant="determinate" value={100} color="error" />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Progress" subheader="Indeterminate" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use indeterminate variant when you don&apos;t know the progress value.
            </Typography>
            <LinearProgress />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Progress
