import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

const FormControl = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Form Control
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Give textual form controls an upgrade with custom styles and sizing.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Text Fields
          </Typography>
          <Stack spacing={3} sx={{ maxWidth: 400 }}>
            <TextField label="Email address" placeholder="name@example.com" fullWidth />
            <TextField label="Example textarea" multiline rows={3} fullWidth />
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Sizing
          </Typography>
          <Stack spacing={3} sx={{ maxWidth: 400 }}>
            <TextField label="Small" size="small" fullWidth />
            <TextField label="Default" fullWidth />
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Disabled & Read Only
          </Typography>
          <Stack spacing={3} sx={{ maxWidth: 400 }}>
            <TextField label="Disabled input" disabled defaultValue="Disabled input" fullWidth />
            <TextField
              label="Read only input"
              InputProps={{ readOnly: true }}
              defaultValue="Read only input"
              fullWidth
            />
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default FormControl
