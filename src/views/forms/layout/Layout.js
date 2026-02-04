import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

const Layout = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/grid/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Form Layout</Typography>} />
          <CardContent>
            <DocsExample href="components/grid">
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField label="Email" type="email" fullWidth />
                <TextField label="Password" type="password" fullWidth />
                <FormControlLabel control={<Checkbox />} label="Check me out" />
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Form Layout{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Horizontal
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/grid#horizontal-form">
              <Box component="form">
                <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Grid size={{ xs: 12, sm: 3 }}>
                    <Typography variant="body2">Email</Typography>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 9 }}>
                    <TextField size="small" fullWidth type="email" />
                  </Grid>
                </Grid>
                <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Grid size={{ xs: 12, sm: 3 }}>
                    <Typography variant="body2">Password</Typography>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 9 }}>
                    <TextField size="small" fullWidth type="password" />
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
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Form Layout{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Grid
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/grid#form-grid">
              <Box component="form">
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label="First name" fullWidth />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField label="Last name" fullWidth />
                  </Grid>
                  <Grid size={12}>
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
                  <Grid size={12}>
                    <FormControlLabel control={<Checkbox />} label="Check me out" />
                  </Grid>
                  <Grid size={12}>
                    <Button variant="contained" type="submit">
                      Sign in
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Form Layout{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Inline
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/grid#inline-form">
              <Box
                component="form"
                sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}
              >
                <TextField label="Username" size="small" />
                <TextField label="Password" type="password" size="small" />
                <FormControlLabel control={<Checkbox />} label="Remember me" />
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Layout
