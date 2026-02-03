import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const Layout = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Form Layout
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Give your forms structure with form layout options.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Horizontal Form
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField label="First Name" fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField label="Last Name" fullWidth />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField label="Email" type="email" fullWidth />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField label="Address" fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField label="City" fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField label="State" fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <TextField label="Zip" fullWidth />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default Layout
