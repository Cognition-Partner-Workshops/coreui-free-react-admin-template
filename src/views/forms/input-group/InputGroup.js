import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Stack from '@mui/material/Stack'

import { DocsExample } from 'src/components'

const InputGroup = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Input Group" />
      <CardContent>
        <DocsExample href="forms/input-group">
          <Stack spacing={2}>
            <TextField
              label="Username"
              InputProps={{ startAdornment: <InputAdornment position="start">@</InputAdornment> }}
              fullWidth
            />
            <TextField
              label="Amount"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                endAdornment: <InputAdornment position="end">.00</InputAdornment>,
              }}
              fullWidth
            />
          </Stack>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default InputGroup
