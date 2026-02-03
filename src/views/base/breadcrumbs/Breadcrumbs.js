import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import MuiBreadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import { DocsExample } from 'src/components'

const Breadcrumbs = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Breadcrumbs" />
      <CardContent>
        <DocsExample href="components/breadcrumb">
          <MuiBreadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="#">
              Home
            </Link>
            <Typography color="text.primary">Library</Typography>
          </MuiBreadcrumbs>
          <MuiBreadcrumbs aria-label="breadcrumb" sx={{ mt: 2 }}>
            <Link underline="hover" color="inherit" href="#">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Library
            </Link>
            <Typography color="text.primary">Data</Typography>
          </MuiBreadcrumbs>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Breadcrumbs
