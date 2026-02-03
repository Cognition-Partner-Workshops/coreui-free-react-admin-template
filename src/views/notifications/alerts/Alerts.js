import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'

import { DocsExample } from 'src/components'

const Alerts = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Alerts" />
      <CardContent>
        <DocsExample href="components/alert">
          <Stack spacing={2}>
            <Alert severity="success">This is a success alert</Alert>
            <Alert severity="info">This is an info alert</Alert>
            <Alert severity="warning">This is a warning alert</Alert>
            <Alert severity="error">This is an error alert</Alert>
          </Stack>
        </DocsExample>
        <DocsExample href="components/alert#additional-content">
          <Stack spacing={2} sx={{ mt: 3 }}>
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              This is a success alert with a title
            </Alert>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              This is an error alert with a title
            </Alert>
          </Stack>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Alerts
