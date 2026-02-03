import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Stack from '@mui/material/Stack'

const InputGroup = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Input Group
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Extend form controls by adding text, buttons, or button groups.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Input Groups
          </Typography>
          <Stack spacing={3} sx={{ maxWidth: 400 }}>
            <TextField
              label="Username"
              InputProps={{
                startAdornment: <InputAdornment position="start">@</InputAdornment>,
              }}
              fullWidth
            />
            <TextField
              label="Email"
              InputProps={{
                endAdornment: <InputAdornment position="end">@example.com</InputAdornment>,
              }}
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
        </CardContent>
      </Card>
    </>
  )
}

export default InputGroup
