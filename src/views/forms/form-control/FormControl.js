import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

const FormControl = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Form Control" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Give textual form controls an upgrade with custom styles, sizing, focus states, and
              more.
            </Typography>
            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField fullWidth label="Email address" placeholder="name@example.com" />
              </Grid>
              <Grid size={12}>
                <TextField fullWidth label="Example textarea" multiline rows={3} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Form Control" subheader="Sizing" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Set heights using the size prop.
            </Typography>
            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField fullWidth size="small" placeholder="Small input" />
              </Grid>
              <Grid size={12}>
                <TextField fullWidth placeholder="Default input" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Form Control" subheader="Disabled" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add the disabled prop to an input to give it a grayed out appearance and remove
              pointer events.
            </Typography>
            <TextField fullWidth disabled placeholder="Disabled input" />
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Form Control" subheader="Readonly" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add the readOnly prop to an input to prevent modification of the input&apos;s value.
            </Typography>
            <TextField
              fullWidth
              defaultValue="Readonly input here..."
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

export default FormControl
