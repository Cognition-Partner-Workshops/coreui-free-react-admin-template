import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const Validation = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Validation
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Provide valuable, actionable feedback to your users with form validation.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Form Validation
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField label="First name" defaultValue="Mark" fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField label="Last name" defaultValue="Otto" fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField label="Username" error helperText="Please choose a username." fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField label="City" error helperText="Please provide a valid city." fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField label="State" error helperText="Please select a valid state." fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField label="Zip" error helperText="Please provide a valid zip." fullWidth />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button variant="contained">Submit form</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default Validation
