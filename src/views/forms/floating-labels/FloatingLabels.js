import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

const FloatingLabels = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Floating Labels" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Create beautifully simple form labels that float over your input fields.
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField fullWidth label="Email address" variant="outlined" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField fullWidth label="Password" type="password" variant="outlined" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Floating Labels" subheader="Textareas" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              By default, textareas will be the same height as inputs.
            </Typography>
            <TextField fullWidth label="Comments" multiline rows={4} variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Floating Labels" subheader="Readonly plaintext" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the disabled prop to create a readonly input.
            </Typography>
            <TextField
              fullWidth
              label="Readonly input"
              defaultValue="email@example.com"
              variant="outlined"
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default FloatingLabels
