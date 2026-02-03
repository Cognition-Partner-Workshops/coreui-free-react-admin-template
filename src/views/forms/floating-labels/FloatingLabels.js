import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

import { DocsExample } from 'src/components'

const FloatingLabels = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Floating Labels" />
      <CardContent>
        <DocsExample href="forms/floating-labels">
          <Stack spacing={2}>
            <TextField label="Email address" variant="outlined" fullWidth />
            <TextField label="Password" type="password" variant="outlined" fullWidth />
            <TextField label="Comments" multiline rows={3} variant="outlined" fullWidth />
          </Stack>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default FloatingLabels
