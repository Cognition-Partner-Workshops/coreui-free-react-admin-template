import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const Spinners = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Spinners" subheader="Circular" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Circular progress indicators for loading states.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <CircularProgress />
              <CircularProgress color="secondary" />
              <CircularProgress color="success" />
              <CircularProgress color="error" />
              <CircularProgress color="warning" />
              <CircularProgress color="info" />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Spinners" subheader="Sizes" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the size prop to change the size of the spinner.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <CircularProgress size={20} />
              <CircularProgress size={30} />
              <CircularProgress size={40} />
              <CircularProgress size={50} />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Spinners" subheader="Determinate" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use variant=&quot;determinate&quot; to show progress value.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <CircularProgress variant="determinate" value={25} />
              <CircularProgress variant="determinate" value={50} />
              <CircularProgress variant="determinate" value={75} />
              <CircularProgress variant="determinate" value={100} />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Spinners" subheader="Buttons" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use spinners within buttons to indicate an action is currently processing.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained" disabled>
                <CircularProgress size={20} sx={{ mr: 1 }} color="inherit" />
                Loading...
              </Button>
              <Button variant="contained" color="primary" disabled>
                <CircularProgress size={20} sx={{ mr: 1 }} color="inherit" />
                Loading...
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Spinners
