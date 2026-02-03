import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import { DocsExample } from 'src/components'

const Layout = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Form Layout" />
      <CardContent>
        <DocsExample href="forms/layout">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField label="Email" fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField label="Password" type="password" fullWidth />
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
              <Button variant="contained">Sign in</Button>
            </Grid>
          </Grid>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Layout
