import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

const FloatingLabels = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Floating Labels
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Create beautifully simple form labels that float over your input fields.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Floating Labels
          </Typography>
          <Stack spacing={3} sx={{ maxWidth: 400 }}>
            <TextField label="Email address" variant="outlined" fullWidth />
            <TextField label="Password" type="password" variant="outlined" fullWidth />
            <TextField label="Comments" multiline rows={3} variant="outlined" fullWidth />
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default FloatingLabels
