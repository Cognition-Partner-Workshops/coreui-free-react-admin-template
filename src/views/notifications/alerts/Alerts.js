import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'

const Alerts = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Alerts
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Provide contextual feedback messages for typical user actions.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Alerts
          </Typography>
          <Stack spacing={2}>
            <Alert severity="success">This is a success alert.</Alert>
            <Alert severity="info">This is an info alert.</Alert>
            <Alert severity="warning">This is a warning alert.</Alert>
            <Alert severity="error">This is an error alert.</Alert>
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Alerts with Titles
          </Typography>
          <Stack spacing={2}>
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              This is a success alert with a title.
            </Alert>
            <Alert severity="info">
              <AlertTitle>Info</AlertTitle>
              This is an info alert with a title.
            </Alert>
            <Alert severity="warning">
              <AlertTitle>Warning</AlertTitle>
              This is a warning alert with a title.
            </Alert>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              This is an error alert with a title.
            </Alert>
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Outlined Alerts
          </Typography>
          <Stack spacing={2}>
            <Alert variant="outlined" severity="success">
              This is an outlined success alert.
            </Alert>
            <Alert variant="outlined" severity="info">
              This is an outlined info alert.
            </Alert>
            <Alert variant="outlined" severity="warning">
              This is an outlined warning alert.
            </Alert>
            <Alert variant="outlined" severity="error">
              This is an outlined error alert.
            </Alert>
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default Alerts
