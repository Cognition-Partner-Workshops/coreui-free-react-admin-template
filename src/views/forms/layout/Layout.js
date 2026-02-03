import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { DocsComponents, DocsExample } from 'src/components'

const Layout = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="forms/layout/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Form Layout</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use MUI Grid to create form layouts.
            </Typography>
            <DocsExample href="react-grid">
              <Box component="form" sx={{ maxWidth: 600 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Email" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="Password" type="password" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Address" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField label="City" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField label="State" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <TextField label="Zip" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel control={<Checkbox />} label="Check me out" />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" type="submit">
                      Sign in
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Form Layout</strong>{' '}
                <Typography component="span">Horizontal</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Create horizontal forms by using Grid with alignItems.
            </Typography>
            <DocsExample href="react-grid#row-column-spacing">
              <Box component="form" sx={{ maxWidth: 600 }}>
                <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={3}>
                    <Typography>Email</Typography>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <TextField size="small" fullWidth />
                  </Grid>
                </Grid>
                <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={3}>
                    <Typography>Password</Typography>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <TextField size="small" type="password" fullWidth />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={{ offset: 3 }}>
                    <Button variant="contained" type="submit">
                      Sign in
                    </Button>
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
