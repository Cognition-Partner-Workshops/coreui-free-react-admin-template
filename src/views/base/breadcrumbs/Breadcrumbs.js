import React from 'react'
import {
  Breadcrumbs as MuiBreadcrumbs,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Link,
} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { DocsComponents, DocsExample } from 'src/components'

const Breadcrumbs = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/breadcrumbs/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Breadcrumbs</Typography>} />
          <CardContent>
            <DocsExample href="components/breadcrumbs">
              <MuiBreadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="#">
                  Home
                </Link>
              </MuiBreadcrumbs>
              <MuiBreadcrumbs aria-label="breadcrumb" sx={{ mt: 2 }}>
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

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Breadcrumbs{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Custom separator
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/breadcrumbs#custom-separator">
              <MuiBreadcrumbs separator="›" aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="#">
                  Home
                </Link>
                <Link underline="hover" color="inherit" href="#">
                  Library
                </Link>
                <Typography color="text.primary">Data</Typography>
              </MuiBreadcrumbs>
              <MuiBreadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
                sx={{ mt: 2 }}
              >
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
      </Grid>
    </Grid>
  )
}

export default Breadcrumbs
