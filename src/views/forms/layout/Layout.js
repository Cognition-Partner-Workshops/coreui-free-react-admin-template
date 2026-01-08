import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const Layout = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="forms/layout/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Form Layout</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Give your forms some structure with form layout options.
            </Typography>
            <DocsExample href="forms/layout">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField label="Email" type="email" fullWidth />
                <TextField label="Password" type="password" fullWidth />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Form Grid</Typography>} />
          <CardContent>
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
          <CardHeader title={<Typography variant="h6">Horizontal Form</Typography>} />
          <CardContent>
            <DocsExample href="forms/layout#horizontal-form">
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={2}>
                  <Typography>Email</Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField type="email" fullWidth />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography>Password</Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField type="password" fullWidth />
                </Grid>
              </Grid>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Inline Form</Typography>} />
          <CardContent>
            <DocsExample href="forms/layout#inline-forms">
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <TextField label="Username" size="small" />
                <TextField label="Password" type="password" size="small" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default Layout
