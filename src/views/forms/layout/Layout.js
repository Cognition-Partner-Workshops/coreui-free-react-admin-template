import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'

const Layout = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Form Layout" subheader="Form grid" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              More complex forms can be built using the grid components.
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField fullWidth label="First name" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField fullWidth label="Last name" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Form Layout" subheader="Horizontal form" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Create horizontal forms with the grid by using Grid components.
            </Typography>
            <Box component="form">
              <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
                <Grid size={{ xs: 12, sm: 3 }}>
                  <Typography component="label" htmlFor="email">
                    Email
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 9 }}>
                  <TextField fullWidth id="email" placeholder="Email" size="small" />
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
                <Grid size={{ xs: 12, sm: 3 }}>
                  <Typography component="label" htmlFor="password">
                    Password
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 9 }}>
                  <TextField
                    fullWidth
                    id="password"
                    type="password"
                    placeholder="Password"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 9 }} offset={{ sm: 3 }}>
                  <FormControlLabel control={<Checkbox />} label="Remember me" />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 9 }} offset={{ sm: 3 }}>
                  <Button variant="contained" type="submit">
                    Sign in
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Form Layout" subheader="Inline forms" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the flex utilities to create inline forms.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
              <TextField label="Username" size="small" placeholder="Username" />
              <TextField label="Password" size="small" type="password" placeholder="Password" />
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <Button variant="contained">Submit</Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Layout
