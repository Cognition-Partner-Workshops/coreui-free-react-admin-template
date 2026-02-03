import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import MuiBreadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import HomeIcon from '@mui/icons-material/Home'

const Breadcrumbs = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Breadcrumbs" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Indicate the current page&apos;s location within a navigational hierarchy.
            </Typography>
            <MuiBreadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="#">
                Home
              </Link>
              <Link underline="hover" color="inherit" href="#">
                Library
              </Link>
              <Typography color="text.primary">Data</Typography>
            </MuiBreadcrumbs>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Breadcrumbs" subheader="With Icons" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add icons to breadcrumb items for better visual hierarchy.
            </Typography>
            <MuiBreadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                color="inherit"
                href="#"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Home
              </Link>
              <Link underline="hover" color="inherit" href="#">
                Core
              </Link>
              <Typography color="text.primary">Breadcrumb</Typography>
            </MuiBreadcrumbs>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Breadcrumbs" subheader="Custom Separator" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use a custom separator between breadcrumb items.
            </Typography>
            <MuiBreadcrumbs separator="›" aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="#">
                Home
              </Link>
              <Link underline="hover" color="inherit" href="#">
                Library
              </Link>
              <Typography color="text.primary">Data</Typography>
            </MuiBreadcrumbs>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Breadcrumbs
