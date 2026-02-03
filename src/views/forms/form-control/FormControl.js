import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

import { DocsExample } from 'src/components'

const FormControl = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Form Control" />
      <CardContent>
        <DocsExample href="forms/form-control">
          <Stack spacing={2}>
            <TextField label="Email address" placeholder="name@example.com" fullWidth />
            <TextField label="Example textarea" multiline rows={3} fullWidth />
          </Stack>
        </DocsExample>
        <DocsExample href="forms/form-control#sizing">
          <Stack spacing={2} sx={{ mt: 3 }}>
            <TextField label="Small" size="small" fullWidth />
            <TextField label="Default" fullWidth />
          </Stack>
        </DocsExample>
        <DocsExample href="forms/form-control#disabled">
          <Stack spacing={2} sx={{ mt: 3 }}>
            <TextField label="Disabled input" disabled fullWidth />
            <TextField
              label="Disabled readonly input"
              disabled
              value="Disabled readonly input"
              fullWidth
            />
          </Stack>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default FormControl
