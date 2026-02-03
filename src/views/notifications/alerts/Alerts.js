import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const Alerts = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/alert/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Alert</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Alerts display brief messages for the user without interrupting their use of the app.
            </Typography>
            <DocsExample href="react-alert">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Alert severity="success">This is a success alert</Alert>
                <Alert severity="info">This is an info alert</Alert>
                <Alert severity="warning">This is a warning alert</Alert>
                <Alert severity="error">This is an error alert</Alert>
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
                <strong>MUI Alert</strong> <Typography component="span">With Title</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use AlertTitle to add a title to the alert.
            </Typography>
            <DocsExample href="react-alert#description">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                  This is a success alert with a title
                </Alert>
                <Alert severity="info">
                  <AlertTitle>Info</AlertTitle>
                  This is an info alert with a title
                </Alert>
                <Alert severity="warning">
                  <AlertTitle>Warning</AlertTitle>
                  This is a warning alert with a title
                </Alert>
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  This is an error alert with a title
                </Alert>
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
                <strong>MUI Alert</strong> <Typography component="span">Outlined</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the outlined variant for a lighter alert style.
            </Typography>
            <DocsExample href="react-alert#outlined-alerts">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Alert variant="outlined" severity="success">
                  This is a success alert
                </Alert>
                <Alert variant="outlined" severity="info">
                  This is an info alert
                </Alert>
                <Alert variant="outlined" severity="warning">
                  This is a warning alert
                </Alert>
                <Alert variant="outlined" severity="error">
                  This is an error alert
                </Alert>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Alerts
