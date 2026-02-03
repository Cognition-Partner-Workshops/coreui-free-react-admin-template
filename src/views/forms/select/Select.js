import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import MuiSelect from '@mui/material/Select'
import Stack from '@mui/material/Stack'

const Select = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Select
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Customize the native select with custom CSS.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Select
          </Typography>
          <Stack spacing={3} sx={{ maxWidth: 400 }}>
            <FormControl fullWidth>
              <InputLabel>Select an option</InputLabel>
              <MuiSelect label="Select an option" defaultValue="">
                <MenuItem value="">Open this select menu</MenuItem>
                <MenuItem value="1">One</MenuItem>
                <MenuItem value="2">Two</MenuItem>
                <MenuItem value="3">Three</MenuItem>
              </MuiSelect>
            </FormControl>
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Select Sizes
          </Typography>
          <Stack spacing={3} sx={{ maxWidth: 400 }}>
            <FormControl size="small" fullWidth>
              <InputLabel>Small</InputLabel>
              <MuiSelect label="Small" defaultValue="1">
                <MenuItem value="1">One</MenuItem>
                <MenuItem value="2">Two</MenuItem>
                <MenuItem value="3">Three</MenuItem>
              </MuiSelect>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Default</InputLabel>
              <MuiSelect label="Default" defaultValue="1">
                <MenuItem value="1">One</MenuItem>
                <MenuItem value="2">Two</MenuItem>
                <MenuItem value="3">Three</MenuItem>
              </MuiSelect>
            </FormControl>
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default Select
