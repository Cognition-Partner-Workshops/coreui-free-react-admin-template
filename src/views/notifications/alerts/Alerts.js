import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { DocsComponents, DocsExample } from 'src/components'

const Alerts = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/alert/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Alert</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Provide contextual feedback messages for typical user actions.
            </Typography>
            <DocsExample href="components/alert">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Alert severity="success">A simple success alert</Alert>
                <Alert severity="info">A simple info alert</Alert>
                <Alert severity="warning">A simple warning alert</Alert>
                <Alert severity="error">A simple error alert</Alert>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Alert with Title</Typography>} />
          <CardContent>
            <DocsExample href="components/alert#additional-content">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>This is a success alert with a title.
                </Alert>
                <Alert severity="info">
                  <AlertTitle>Info</AlertTitle>This is an info alert with a title.
                </Alert>
                <Alert severity="warning">
                  <AlertTitle>Warning</AlertTitle>This is a warning alert with a title.
                </Alert>
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>This is an error alert with a title.
                </Alert>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Dismissible Alert</Typography>} />
          <CardContent>
            <DocsExample href="components/alert#dismissing">
              <Alert severity="warning" onClose={() => {}}>
                This is a dismissible alert!
              </Alert>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default Alerts
