import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'

import { DocsExample } from 'src/components'

const Spinners = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Spinners" />
      <CardContent>
        <DocsExample href="components/spinner">
          <Stack direction="row" spacing={2}>
            <CircularProgress />
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="error" />
            <CircularProgress color="warning" />
            <CircularProgress color="info" />
          </Stack>
        </DocsExample>
        <DocsExample href="components/spinner#size">
          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
            <CircularProgress size={20} />
            <CircularProgress size={30} />
            <CircularProgress size={40} />
          </Stack>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Spinners
