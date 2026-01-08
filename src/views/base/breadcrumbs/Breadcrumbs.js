import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { DocsComponents, DocsExample } from 'src/components'

const BreadcrumbsView = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/breadcrumb/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Breadcrumb</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The breadcrumb navigation provides links back to each previous page the user navigated
              through and shows the current location in a website or an application. MUI Breadcrumbs
              automatically add separators between items.
            </Typography>
            <DocsExample href="components/breadcrumb">
              <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                <Link underline="hover" color="inherit" href="#">
                  Home
                </Link>
                <Typography color="text.primary">Library</Typography>
              </Breadcrumbs>
              <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                <Link underline="hover" color="inherit" href="#">
                  Home
                </Link>
                <Link underline="hover" color="inherit" href="#">
                  Library
                </Link>
                <Typography color="text.primary">Data</Typography>
              </Breadcrumbs>
              <Breadcrumbs aria-label="breadcrumb">
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
              </Breadcrumbs>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default BreadcrumbsView
