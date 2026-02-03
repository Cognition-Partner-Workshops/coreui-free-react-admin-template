import React from 'react'
import Typography from '@mui/material/Typography'
import MuiBreadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const Breadcrumbs = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Breadcrumbs
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Indicate the current page location within a navigational hierarchy.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Breadcrumbs
          </Typography>
          <MuiBreadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link underline="hover" color="inherit" href="#">
              Home
            </Link>
            <Typography color="text.primary">Library</Typography>
          </MuiBreadcrumbs>

          <MuiBreadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link underline="hover" color="inherit" href="#">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Library
            </Link>
            <Typography color="text.primary">Data</Typography>
          </MuiBreadcrumbs>

          <MuiBreadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="#">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Library
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Data
            </Link>
            <Typography color="text.primary">Bootstrap</Typography>
          </MuiBreadcrumbs>
        </CardContent>
      </Card>
    </>
  )
}

export default Breadcrumbs
