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
import { DocsComponents, DocsExample } from 'src/components'

const Layout = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="forms/layout/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>Layout</strong> <small>Form grid</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use MUI Grid for form layouts.
            </Typography>
            <DocsExample href="forms/layout#form-grid">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField label="First name" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="Last name" fullWidth />
                </Grid>
              </Grid>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>Layout</strong> <small>Gutters</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="forms/layout#gutters">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField label="First name" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="Last name" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Address" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="City" fullWidth />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField label="State" fullWidth />
                </Grid>
                <Grid item xs={12} md={2}>
                  <TextField label="Zip" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel control={<Checkbox />} label="Check me out" />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained">Sign in</Button>
                </Grid>
              </Grid>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>Layout</strong> <small>Horizontal form</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="forms/layout#horizontal-form">
              <Box component="form">
                <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={2}>
                    <Typography>Email</Typography>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <TextField type="email" fullWidth />
                  </Grid>
                </Grid>
                <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={2}>
                    <Typography>Password</Typography>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <TextField type="password" fullWidth />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={{ offset: 2 }}>
                    <Button variant="contained">Sign in</Button>
                  </Grid>
                </Grid>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Layout
